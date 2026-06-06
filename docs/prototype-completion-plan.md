# Prototype completion plan

This is the shortest path to a complete functional prototype that can be operated without a real Lightning node or database.

## Done

- Health endpoint
- Create invoice endpoint
- Get invoice endpoint
- Mock settle invoice endpoint
- Ledger query endpoint
- API key middleware
- In-memory invoice store
- In-memory ledger store
- Prisma schema and validation scripts
- CI workflow file

## Remaining before runnable prototype sign-off

1. Verify GitHub Actions runs for this repository.
2. Run the local build guide commands in `docs/local-build.md`.
3. Fix any TypeScript errors from the first real build.
4. Add a smoke-test script for the HTTP flow.

## Remaining before persistent MVP

1. Add Prisma Client runtime module.
2. Replace invoice store with Prisma queries.
3. Replace ledger store with Prisma queries.
4. Add migration instructions.
5. Add merchant API key lookup from database.

## Remaining before production

1. Replace mock Lightning adapter with LND or Core Lightning adapter.
2. Add webhook retry worker.
3. Add request rate limiting.
4. Add structured logging and monitoring.
5. Add security review.
