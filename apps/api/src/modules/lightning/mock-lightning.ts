export type CreateInvoiceInput = {
  amountSats: number;
  memo?: string;
  expiresInSeconds: number;
};

export type CreatedLightningInvoice = {
  paymentHash: string;
  paymentRequest: string;
  expiresAt: Date;
};

export async function createLightningInvoice(input: CreateInvoiceInput): Promise<CreatedLightningInvoice> {
  const paymentHash = `mock_${Date.now()}`;
  const expiresAt = new Date(Date.now() + input.expiresInSeconds * 1000);

  return {
    paymentHash,
    paymentRequest: `lnbc${input.amountSats}mockinvoice${paymentHash}`,
    expiresAt
  };
}
