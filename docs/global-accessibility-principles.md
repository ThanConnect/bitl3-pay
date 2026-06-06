# Global accessibility and universal usability principles

BitL3 Pay must be designed for people around the world, not only technical Bitcoin users.

## Product principles

1. Simple first: every core action must be understandable without knowing Lightning internals.
2. Global by default: support localization, different currencies, time zones, and regional payment habits.
3. Low-bandwidth friendly: core flows should work on slow networks and older devices.
4. Accessibility first: follow WCAG-oriented design, keyboard navigation, screen reader labels, and clear contrast.
5. Trust and safety: show fees, expiry, amount, status, and confirmation clearly.
6. Progressive disclosure: beginners see simple flows; advanced users can inspect payment hash, invoice, and ledger details.
7. No lock-in: provide APIs, SDKs, exportable data, and open documentation.

## Required user-facing flows

- Create a payment request
- Share a payment link or QR code
- Pay from any Lightning-compatible wallet
- See real-time payment status
- Receive a receipt
- Export payment history

## Required developer-facing flows

- Create an API key
- Create an invoice with one API call
- Receive webhook events
- Query invoice status
- Query ledger entries
- Use SDK examples

## Required merchant-facing flows

- Sign up easily
- Create and rotate API keys
- View payment history
- Configure webhooks
- Export accounting reports
- See settlement status clearly

## Global readiness checklist

- Internationalization-ready UI strings
- Multi-currency display layer
- Localized date and time formatting
- Mobile-first layout
- Works on low-end phones
- Accessible color contrast
- Clear error messages
- Human-readable payment status
- Non-custodial direction where possible
- Regulatory notes separated by region
