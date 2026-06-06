import { addLedgerEntry } from '../ledger/store';
import { createLightningInvoice } from '../lightning/mock-lightning';
import type { CreateInvoiceRequest } from './types';
import { findInvoiceById, saveInvoice } from './store';

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
