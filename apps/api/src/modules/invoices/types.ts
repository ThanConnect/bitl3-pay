export interface CreateInvoiceRequest {
  amountSats: number;
  memo?: string;
  expiresInSeconds?: number;
}

export interface InvoiceResponse {
  id: string;
  status: string;
  amountSats: number;
  paymentHash: string;
}
