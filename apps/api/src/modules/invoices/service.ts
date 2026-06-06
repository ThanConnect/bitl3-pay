import { addLedgerEntry } from '../ledger/store';
import { createLightningInvoice } from '../lightning/mock-lightning';
import type { CreateInvoiceRequest } from './types';
import { findInvoiceById, saveInvoice, settleInvoiceById } from './store';

export async function createInvoice(input: CreateInvoiceRequest) {
  if (!Number.isInteger(input.amountSats) || input.amountSats <= 0) {
    throw new Error('amountSats must be a positive integer');
  }

  const expiresInSeconds = input.expiresInSeconds ?? 900;
  const lightning = await createLightningInvoice({
    amountSats: input.amountSats,
    memo: input.memo,
    expiresInSeconds
  });

  const invoice = {
    id: `inv_${Date.now()}`,
    status: 'pending' as const,
    amountSats: input.amountSats,
    memo: input.memo,
    paymentHash: lightning.paymentHash,
    lightningInvoice: lightning.paymentRequest,
    expiresAt: lightning.expiresAt.toISOString(),
    createdAt: new Date().toISOString()
  };

  const saved = saveInvoice(invoice);

  addLedgerEntry({
    id: `led_${Date.now()}`,
    invoiceId: saved.id,
    type: 'invoice_created',
    amountSats: saved.amountSats,
    direction: 'credit',
    createdAt: new Date().toISOString()
  });

  return saved;
}

export async function getInvoice(id: string) {
  return findInvoiceById(id);
}

export async function settleInvoice(id: string) {
  const existing = findInvoiceById(id);

  if (!existing) {
    return undefined;
  }

  if (existing.status === 'settled') {
    return existing;
  }

  const settled = settleInvoiceById(id);

  if (!settled) {
    return undefined;
  }

  addLedgerEntry({
    id: `led_${Date.now()}`,
    invoiceId: settled.id,
    type: 'invoice_settled',
    amountSats: settled.amountSats,
    direction: 'debit',
    createdAt: new Date().toISOString()
  });

  return settled;
}
