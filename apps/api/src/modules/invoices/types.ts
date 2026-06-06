export type InvoiceStatus = 'pending' | 'settled' | 'expired';

export interface CreateInvoiceRequest {
  amountSats: number;
  memo?: string;
  expiresInSeconds?: number;
}

export interface InvoiceResponse {
  id: string;
  status: InvoiceStatus;
  amountSats: number;
  memo?: string;
  paymentHash: string;
  lightningInvoice: string;
  expiresAt: string;
  settledAt?: string;
  createdAt: string;
}
