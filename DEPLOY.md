# Deploy do Personal OS no EasyPanel

O projeto foi preparado para subir diretamente pelo EasyPanel usando o repositório do GitHub.

## Criar o App

No EasyPanel:

1. Crie um novo **App**.
2. Escolha **GitHub** como fonte.
3. Selecione o repositório `desenvoltoo/personal-os`.
4. Branch: `main`.
5. Build method: **Dockerfile**.
6. Dockerfile path: `Dockerfile`.
7. Porta interna do container: `80`.
8. Faça o primeiro deploy.

Para o primeiro modelo visual não é necessário configurar Supabase, n8n ou IA. A interface sobe sozinha.

## Domínio

Depois do deploy, adicione o domínio/subdomínio no próprio EasyPanel. Como o DNS já está no Cloudflare, use o hostname que você quiser, por exemplo:

```text
os.seudominio.com
```

Não é necessário clonar o repositório manualmente nem executar `docker compose` no servidor.

## Atualizações

Sempre que houver novos commits na branch `main`, basta fazer um novo deploy/redeploy pelo EasyPanel. Se o auto-deploy do GitHub estiver habilitado no App, os novos commits podem ser publicados automaticamente.

## Primeiro modelo

A primeira tela é um dashboard único e responsivo com espaços para empresas, trabalho/gestão, projetos externos e pessoal, além de pesquisa, tarefas, documentos, notas, itens recentes e acesso ao assistente de IA.

A IA não executa mudanças por conta própria. Ela poderá organizar, mover ou editar conteúdo quando houver um comando explícito do usuário. Operações sensíveis poderão exigir confirmação antes da execução.
