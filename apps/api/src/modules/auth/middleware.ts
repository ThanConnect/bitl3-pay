import type { FastifyReply, FastifyRequest } from 'fastify';
import { validateApiKey } from './api-key';

export async function requireApiKey(request: FastifyRequest, reply: FastifyReply) {
  const header = request.headers.authorization;
  const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;

  if (!validateApiKey(token)) {
    return reply.code(401).send({ error: 'invalid or missing API key' });
  }
}
