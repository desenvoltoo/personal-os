# Personal OS

Central de trabalho pessoal e profissional, modular e self-hosted.

## Objetivo

Unificar em um único lugar:

- empresas e áreas de trabalho;
- projetos;
- documentos e arquivos;
- notas;
- tarefas;
- automações via n8n;
- recursos de IA;
- integrações futuras.

## Stack inicial

- **Web:** React + Vite + TypeScript
- **API:** Fastify + TypeScript
- **Banco/Auth/Storage:** Supabase existente
- **Automações:** n8n existente
- **Deploy:** Docker
- **Acesso externo:** Cloudflare Tunnel

## Estrutura

```text
apps/
  web/       interface principal
  api/       API e integrações
packages/
  shared/    tipos e contratos compartilhados
supabase/
  migrations/
```

## Desenvolvimento

```bash
cp .env.example .env
npm install
npm run dev
```

## Docker

```bash
docker compose up -d --build
```

## Estado

MVP em construção.
