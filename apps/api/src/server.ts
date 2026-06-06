import Fastify from 'fastify';

const server = Fastify({ logger: true });

server.get('/health', async () => {
  return { ok: true, service: 'bitl3-api' };
});

const port = Number(process.env.PORT || 3000);

server.listen({ port, host: '0.0.0.0' }).catch((error) => {
  server.log.error(error);
  process.exit(1);
});
