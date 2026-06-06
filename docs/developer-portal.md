# BitL3 Developer Portal UX

The developer portal must help builders integrate payments quickly without needing deep Bitcoin or Lightning knowledge.

## Primary user goal

A developer should be able to create an API key, create an invoice, receive a webhook, and verify settlement in minutes.

## First-screen layout

```text
BitL3 Developers

Accept global Bitcoin payments in minutes.

[ Create API Key ]
[ View Quickstart ]

Quickstart
1. Create an API key
2. Create an invoice
3. Show the payment link or QR code
4. Receive settlement event

Example
POST /v1/invoices

{
  "amountSats": 1000,
  "memo": "Order #1001"
}

[ Copy Example ]
```

## Core sections

### Quickstart

- Create API key
- Create invoice
- Fetch invoice
- Settle invoice in sandbox/mock mode
- Query ledger

### API reference

- Authentication
- Invoices
- Ledger
- Webhooks
- Errors

### SDKs

- JavaScript SDK
- Python SDK later
- Example apps

### Webhooks

- Event list
- Payload examples
- Signature verification
- Retry behavior

## Accessibility and global requirements

- Plain-language docs
- Copy buttons for all code examples
- Examples in multiple languages later
- Error messages with fixes
- Works well on mobile browsers
- Avoid assuming users are native English speakers
