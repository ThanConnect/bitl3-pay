# BitL3 Merchant Dashboard UX

The merchant dashboard is the main operating center for businesses that accept payments through BitL3.

## Primary user goal

A merchant should understand business payment activity quickly without needing to understand Bitcoin or Lightning internals.

## Mobile-first summary layout

```text
BitL3 Merchant

Today
Received: ฿8,420.00
Payments: 37
Pending: 4

[ Create Payment Request ]

Recent Payments

Order      Amount      Status      Time
#1024      ฿120.00     Paid        10:42
#1023      ฿89.00      Pending     10:35
#1022      ฿450.00     Paid        10:12

Menu
- Payments
- API Keys
- Webhooks
- Reports
- Settings
```

## Core sections

### Payments

- Search by invoice ID, memo, amount, or status
- Filter by paid, pending, expired, failed
- Open invoice details
- Export CSV

### API Keys

- Create key
- Rotate key
- Revoke key
- Show last used time
- Warn before exposing secrets

### Webhooks

- Add endpoint
- Test endpoint
- Show delivery history
- Retry failed delivery

### Reports

- Daily totals
- Monthly totals
- Settlement reports
- Accounting export

## Accessibility requirements

- Large tap targets
- Clear payment status labels
- Tables must collapse into mobile cards
- No information should depend only on color
- Support screen readers for all status badges

## Global requirements

- Local currency display
- Local date and time formatting
- Multi-language strings
- Export formats usable by small businesses globally
- Works on low-end Android devices
