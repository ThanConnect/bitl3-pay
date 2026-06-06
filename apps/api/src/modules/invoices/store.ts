export type StoredInvoice = {
  id: string;
  status: 'pending' | 'settled' | 'expired';
  amountSats: number;
  memo?: string;
  paymentHash: string;
  lightningInvoice: string;
  expiresAt: string;
  settledAt?: string;
  createdAt: string;
};

const invoices = new Map<string, StoredInvoice>();

export function saveInvoice(invoice: StoredInvoice): StoredInvoice {
  invoices.set(invoice.id, invoice);
  return invoice;
}

export function findInvoiceById(id: string): StoredInvoice | undefined {
  return invoices.get(id);
}

export function settleInvoiceById(id: string): StoredInvoice | undefined {
  const invoice = invoices.get(id);

  if (!invoice) {
    return undefined;
  }

  const updated: StoredInvoice = {
    ...invoice,
    status: 'settled',
    settledAt: new Date().toISOString()
  };

  invoices.set(id, updated);
  return updated;
}

export function listInvoices(): StoredInvoice[] {
  return Array.from(invoices.values());
}
