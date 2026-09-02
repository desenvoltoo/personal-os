# Política da IA — Personal OS

A IA do Personal OS é um recurso **consultivo e somente leitura**.

## Pode

- ler conteúdo explicitamente disponibilizado pelo sistema;
- pesquisar informações;
- resumir documentos e notas;
- responder perguntas sobre o conteúdo;
- sugerir categorias, tags, pastas ou destinos;
- sugerir nomes, títulos e organização;
- gerar texto como rascunho para o usuário copiar ou aprovar.

## Não pode

A IA **não possui permissão** para:

- mover arquivos;
- renomear arquivos;
- excluir arquivos;
- criar arquivos diretamente;
- editar arquivos;
- reorganizar pastas;
- alterar notas ou documentos existentes;
- executar alterações automáticas no conteúdo do usuário.

## Regra de arquitetura

As credenciais e endpoints expostos à camada de IA devem ser de leitura sempre que possível. Operações de escrita ficam separadas da IA e só podem ser acionadas diretamente pela interface do usuário.

Mesmo quando a IA sugerir uma ação, a sugestão deve ser apresentada ao usuário sem executá-la automaticamente.
