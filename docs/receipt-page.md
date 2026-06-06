# BitL3 Receipt Page UX

The receipt page confirms payment completion in clear, human language.

## Primary user goal

A user should know that the payment succeeded, how much was paid, who received it, and how to save or share proof.

## Mobile-first layout

```text
BitL3 Pay

Payment complete

You paid Sanga Store
฿120.00
≈ 6,500 sats

Receipt ID
rcpt_123456

Paid at
2026-06-06 23:10

[ Download Receipt ]
[ Share Receipt ]
[ Back to Merchant ]

Advanced details
Payment hash
Invoice ID
Ledger entry
```

## Accessibility requirements

- Success message must be text-based, not color-only.
- Receipt ID must be copyable.
- Buttons must be large enough for touch screens.
- Timestamps should use localized formatting.
- Advanced technical details must be optional.

## Global requirements

- Local currency display
- Local time zone formatting
- Multi-language text
- Shareable receipt link
- Printable simple receipt
