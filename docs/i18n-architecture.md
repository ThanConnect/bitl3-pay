# BitL3 Internationalization Architecture

BitL3 must be global by default. Internationalization is not an add-on; it is a core product requirement.

## Goals

- Support users who do not speak English.
- Support merchants operating in different countries.
- Display local currencies without hiding Bitcoin/Lightning details from advanced users.
- Format dates, times, numbers, and amounts according to user locale.
- Prepare for right-to-left languages.

## Initial locale strategy

Start with these locales:

- en-US: English
- th-TH: Thai
- es-ES: Spanish
- pt-BR: Portuguese
- hi-IN: Hindi
- ar: Arabic, RTL-ready

## Translation key pattern

Use stable keys instead of hard-coded interface text.

```json
{
  "payment.status.waiting": "Waiting for payment",
  "payment.status.paid": "Paid",
  "payment.action.openWallet": "Open Wallet",
  "payment.action.copyInvoice": "Copy Invoice",
  "receipt.title": "Payment complete"
}
```

## Required locale-aware values

- Currency display
- Satoshi display
- Date and time
- Expiry countdown
- Error messages
- Payment status labels
- Receipt labels

## UX rules

- Default view must use simple human language.
- Technical terms must be hidden under Advanced details.
- Copy must be short and easy to translate.
- Avoid idioms that are hard to localize.
- Do not rely on color alone to convey status.

## Implementation direction

Suggested packages later:

- Frontend: next-intl or i18next
- Backend: locale-aware message keys for API errors
- Shared package: packages/core-types for enum values and status keys

## Example payment status mapping

```ts
const paymentStatusCopy = {
  pending: 'payment.status.waiting',
  settled: 'payment.status.paid',
  expired: 'payment.status.expired'
};
```

## Acceptance criteria

- No user-facing string should be hard-coded in future frontend apps.
- Payment page should support at least English and Thai first.
- Receipt page should use localized date and time formatting.
- Merchant dashboard should allow currency display selection.
