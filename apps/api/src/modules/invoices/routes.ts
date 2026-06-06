import type { FastifyInstance } from 'fastify';
import { requireApiKey } from '../auth/middleware';
import { createInvoice, getInvoice } from './service';
import type { CreateInvoiceRequest } from './types';

export async function invoiceRoutes(app: FastifyInstance) {
  app.post<{ Body: CreateInvoiceRequest }>(
    '/v1/invoices',
    { preHandler: requireApiKey },
    async (request, reply) => {
      try {
        const invoice = await createInvoice(request.body);
        return reply.code(201).send(invoice);
      } catch (error) {
        return reply.code(400).send({
          error: error instanceof Error ? error.message : 'invalid invoice request'
        });
      }
    }
  );

  app.get<{ Params: { id: string } }>(
    '/v1/invoices/:id',
    { preHandler: requireApiKey },
    async (request, reply) => {
      const invoice = await getInvoice(request.params.id);

      if (!invoice) {
        return reply.code(404).send({ error: 'invoice not found' });
      }

      return reply.send(invoice);
    }
  );
}
