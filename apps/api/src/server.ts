import Fastify from 'fastify';
import cors from '@fastify/cors';
import { createClient } from '@supabase/supabase-js';

const app = Fastify({ logger: true });

const port = Number(process.env.API_PORT ?? 3333);
const webOrigin = process.env.WEB_ORIGIN ?? 'http://localhost:5173';

await app.register(cors, {
  origin: webOrigin,
  credentials: true,
});

app.get('/health', async () => ({
  ok: true,
  service: 'personal-os-api',
  timestamp: new Date().toISOString(),
}));

app.get('/api/workspaces', async (_request, reply) => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return reply.code(503).send({ error: 'Supabase não configurado.' });
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await supabase
    .from('personal_os_workspaces')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) return reply.code(500).send({ error: error.message });
  return { data };
});

app.post('/api/automation/:workflow', async (request, reply) => {
  const baseUrl = process.env.N8N_BASE_URL?.replace(/\/$/, '');
  const token = process.env.N8N_WEBHOOK_TOKEN;
  const { workflow } = request.params as { workflow: string };

  if (!baseUrl) return reply.code(503).send({ error: 'n8n não configurado.' });

  const response = await fetch(`${baseUrl}/webhook/personal-os/${encodeURIComponent(workflow)}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(request.body ?? {}),
  });

  const text = await response.text();
  return reply.code(response.status).type(response.headers.get('content-type') ?? 'text/plain').send(text);
});

await app.listen({ port, host: '0.0.0.0' });
