# Pendências (o que só você pode preencher)

O código do guia (Códigos 1 a 50) está completo. Faltam apenas estes dados:

| # | O que falta | Onde entra |
|---|-------------|------------|
| 1 | ~~URL e chave do Supabase~~ (já preenchidas no `.env`) | feito |
| 2 | Rodar `supabase/schema.sql` no SQL Editor do seu projeto | Supabase (Etapa 3) |
| 3 | ~~Nome, LinkedIn e GitHub~~ (já aplicados no `README.md`) | feito |
| 4 | ~~Usuário do GitHub~~ (ricardowgb, já aplicado no `app.json` e no README) | feito |
| 5 | Criar o repositório público `chatroom` no GitHub | `git remote add origin https://github.com/ricardowgb/chatroom.git` |
| 6 | 3 a 4 capturas de tela (lista de salas, conversa, "digitando") | pasta `docs/` e referência no `README.md` |
| 7 | Resultado do roteiro de 15 testes manuais com dois aparelhos | Etapa 14.3 |

## Arquivos que o guia cita mas não traz o código
Foram escritos para completar o projeto:
- `src/utils/errors.ts` (`friendlyError`: traduz erros do Supabase/rede)
- `src/utils/icons.ts` (tipo `IconName`)

## Ajustes feitos para o Expo SDK 58 / bibliotecas atuais
- `app/(app)/(tabs)/_layout.tsx`: `color as string` no ícone da aba.
- `app/(app)/(tabs)/index.tsx`: `onRefresh` chama `refetch()` dentro de uma função.
- `package.json`: `jest` ignora a pasta `supabase/` (os testes do banco rodam pelo Node).
