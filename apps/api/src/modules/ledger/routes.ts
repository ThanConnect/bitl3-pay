import type { FastifyInstance } from 'fastify';
import { requireApiKey } from '../auth/middleware';
import { listLedgerEntriesByInvoice } from './store';

export async function ledgerRoutes(app: FastifyInstance) {
  app.get<{ Params: { invoiceId: string } }>(
    '/v1/invoices/:invoiceId/ledger',
    { preHandler: requireApiKey },
    async (request, reply) => {
      const entries = listLedgerEntriesByInvoice(request.params.invoiceId);
      return reply.send({ entries });
    }
  );
}
