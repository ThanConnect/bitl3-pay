# BitL3 Payment Page UX

The payment page is the most important user-facing experience in the BitL3 ecosystem.

## Primary user goal

A user should be able to complete a payment without understanding Bitcoin, Lightning, payment hashes, nodes, or channels.

## Mobile-first layout

```text
BitL3 Pay

Pay Sanga Store

Amount
฿120.00
≈ 6,500 sats

Status
Waiting for payment

[ QR CODE ]

[ Open Wallet ]
[ Copy Invoice ]

Expires in 14:32

Need help?
How to pay with a wallet
```

## Status labels

Use human-friendly language:

- Waiting for payment
- Paid
- Expired
- Processing
- Payment failed

Avoid technical labels in the default view:

- BOLT11
- payment hash
- preimage
- liquidity
- node pubkey

Advanced details can be hidden behind an optional section.

## Accessibility requirements

- Large primary button
- Strong contrast
- Screen-reader labels
- Keyboard navigable controls
- No essential information conveyed by color only
- Clear expiry countdown
- Simple error messages

## Global readiness

- Localized copy
- Local currency display
- Time zone aware timestamps
- Low-bandwidth layout
- Works on low-end Android phones
- Supports right-to-left languages later
