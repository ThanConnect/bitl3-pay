# BitL3 Design System

The BitL3 design system defines the visual and interaction standards for a universal payment ecosystem.

## Design goals

- Simple enough for first-time users
- Accessible for people with different abilities
- Mobile-first and low-bandwidth friendly
- Ready for many languages and cultures
- Trustworthy for financial interactions

## Core UI principles

1. One primary action per screen.
2. Use plain language before technical language.
3. Always show amount, recipient, status, and next action clearly.
4. Hide advanced technical details by default.
5. Make every important action available through large touch targets.

## Status language

Use clear labels:

- Waiting for payment
- Paid
- Expired
- Processing
- Payment failed

Avoid default technical language:

- BOLT11
- preimage
- channel liquidity
- node pubkey

## Component standards

### Button

- Minimum height: 44px
- Clear text label
- Loading state required
- Disabled state required

### Status badge

- Must include text label
- Must not rely only on color
- Must be screen-reader friendly

### Amount display

- Primary local currency
- Secondary sats/BTC value
- Clear formatting per locale

### QR block

- Large enough to scan on low-end phones
- Include copy invoice fallback
- Include open wallet fallback

### Error message

- Plain language
- Explain what happened
- Tell the user what to do next

## Accessibility checklist

- Keyboard navigable
- Screen-reader labels
- Strong contrast
- Large tap targets
- No color-only status
- Simple readable copy
- Works on small screens

## First implementation targets

- Payment page components
- Receipt page components
- Merchant dashboard cards
- Developer portal code blocks
