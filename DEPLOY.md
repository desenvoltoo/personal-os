# Deploy do Personal OS

O MVP foi preparado para rodar no servidor atual usando Docker, reaproveitando o Supabase, n8n e Cloudflare Tunnel já existentes.

## 1. Clonar o projeto

```bash
git clone https://github.com/desenvoltoo/personal-os.git
cd personal-os
```

## 2. Criar o arquivo `.env`

```bash
cp .env.example .env
```

Preencha somente o que for necessário para o ambiente atual. Para visualizar o primeiro modelo, a interface web não depende da IA.

## 3. Subir com Docker

```bash
docker compose up -d --build
```

Serviços padrão:

- Web: porta `8080`
- API: porta `3333`

## 4. Cloudflare Tunnel

No túnel já existente, crie um hostname apontando para:

```text
http://localhost:8080
```

Exemplo:

```text
os.seudominio.com -> http://localhost:8080
```

## 5. Atualizar depois de novos commits

```bash
git pull origin main
docker compose up -d --build
```

## Primeiro modelo

A primeira tela é um dashboard único e responsivo com:

- espaços para empresas, trabalho/gestão, projetos externos e pessoal;
- pesquisa global;
- acesso a tarefas, documentos e notas;
- itens recentes;
- visão rápida de pendências;
- assistente de IA sob demanda.

A IA não executa alterações de forma autônoma. Ações como organizar, mover ou editar conteúdo só deverão ocorrer mediante comando explícito do usuário e, para operações sensíveis, com confirmação.
