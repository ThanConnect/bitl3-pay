export type LedgerEntry = {
  id: string;
  invoiceId: string;
  type: 'invoice_created' | 'invoice_settled';
  amountSats: number;
  direction: 'credit' | 'debit';
  createdAt: string;
};

const entries: LedgerEntry[] = [];

export function addLedgerEntry(entry: LedgerEntry): LedgerEntry {
  entries.push(entry);
  return entry;
}

export function listLedgerEntries(): LedgerEntry[] {
  return entries;
}

export function listLedgerEntriesByInvoice(invoiceId: string): LedgerEntry[] {
  return entries.filter((entry) => entry.invoiceId === invoiceId);
}
