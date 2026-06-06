import { createLightningInvoice } from '../lightning/mock-lightning';
import type { CreateInvoiceRequest } from './types';

export async function createInvoice(input: CreateInvoiceRequest) {
  const expiresInSeconds = input.expiresInSeconds ?? 900;
  const lightning = await createLightningInvoice({
    amountSats: input.amountSats,
    memo: input.memo,
    expiresInSeconds
  });

  return {
    id: `inv_${Date.now()}`,
    status: 'pending',
    amountSats: input.amountSats,
    paymentHash: lightning.paymentHash,
    lightningInvoice: lightning.paymentRequest,
    expiresAt: lightning.expiresAt.toISOString()
  };
}
