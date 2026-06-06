# Build review notes

Reviewed current API module imports and route registration.

Known current state:
- server registers invoiceRoutes and ledgerRoutes
- invoice service uses createLightningInvoice input object signature correctly
- ledger route imports listLedgerEntriesByInvoice from ledger store

Next step:
- add automated TypeScript build check in CI
