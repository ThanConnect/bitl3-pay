# BitL3 Pay

BitL3 Pay is a Bitcoin Layer 3 payment infrastructure project built on top of the Lightning Network.

## Mission

Make Bitcoin payments easy for apps, merchants, creators, and automated agents through a simple API layer.

## MVP v0.1

The first version focuses on a practical Bitcoin Layer 3 payment API:

- Merchant API keys
- Lightning invoice creation
- Payment status monitoring
- Internal ledger entries
- Webhook notifications
- Basic dashboard foundation
- Future-ready adapters for Taproot Assets and RGB

## Architecture

```text
Apps / Merchants / Agents
        |
        v
BitL3 Pay API
        |
        +-- Auth Service
        +-- Invoice Service
        +-- Payment Monitor
        +-- Ledger Service
        +-- Webhook Service
        |
        v
Lightning Adapter
        |
        v
LND / Core Lightning
        |
        v
Bitcoin Network
```

## Stack

- Node.js
- TypeScript
- Fastify
- PostgreSQL
- Prisma
- Redis
- BullMQ
- LND adapter first
- Next.js dashboard later

## Development

```bash
pnpm install
cp .env.example .env
docker compose up -d
pnpm db:migrate
pnpm dev
```

## Status

Current target: MVP v0.1 on local/testnet/signet.

Production use requires security review, Lightning node hardening, HTTPS, key management, monitoring, and incident response procedures.
