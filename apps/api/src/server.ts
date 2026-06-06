import Fastify from 'fastify';
import { invoiceRoutes } from './modules/invoices/routes';
import { ledgerRoutes } from './modules/ledger/routes';

const server = Fastify({ logger: true });

server.get('/health', async () => {
  return { ok: true, service: 'bitl3-api' };
});

server.register(invoiceRoutes);
server.register(ledgerRoutes);

const port = Number(process.env.PORT || 3000);

server.listen({ port, host: '0.0.0.0' }).catch((error) => {
  server.log.error(error);
  process.exit(1);
});
