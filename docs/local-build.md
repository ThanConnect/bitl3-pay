# Local build guide

Use this checklist to verify the API locally.

```bash
cd apps/api
npm install
npm run prisma:validate
npm run build
npm run dev
```

Expected endpoints:

```http
GET /health
POST /v1/invoices
GET /v1/invoices/:id
GET /v1/invoices/:invoiceId/ledger
```

Example API key format for the current prototype:

```http
Authorization: Bearer bitl3_test_key
```

Notes:
- Current storage is in-memory.
- Prisma schema validation is enabled, but Prisma Client is not yet wired into runtime services.
- Lightning is currently mocked.
