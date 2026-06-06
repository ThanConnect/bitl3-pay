import type { FastifyInstance } from 'fastify';
import { createInvoice } from './service';
import type { CreateInvoiceRequest } from './types';

export async function invoiceRoutes(app: FastifyInstance) {
  app.post<{ Body: CreateInvoiceRequest }>('/v1/invoices', async (request, reply) => {
    try {
      const invoice = await createInvoice(request.body);
      return reply.code(201).send(invoice);
    } catch (error) {
      return reply.code(400).send({
        error: error instanceof Error ? error.message : 'invalid invoice request'
      });
    }
  });
}
