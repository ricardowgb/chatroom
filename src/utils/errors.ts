// Traduz erros técnicos (Supabase, rede, validação) em mensagens para o usuário.

const REGRAS: { teste: RegExp; mensagem: string }[] = [
  {
    teste: /network request failed|failed to fetch|network error|internet|timeout/i,
    mensagem: 'Sem conexão com a internet.',
  },
  {
    teste: /invalid login credentials/i,
    mensagem: 'E-mail ou senha incorretos.',
  },
  {
    teste: /already registered|already been registered|user already exists/i,
    mensagem: 'Este e-mail já está cadastrado.',
  },
  {
    teste: /email not confirmed/i,
    mensagem: 'Confirme seu e-mail antes de entrar.',
  },
  {
    teste: /password should be at least|weak password/i,
    mensagem: 'Use pelo menos 6 caracteres na senha.',
  },
  {
    teste: /rate limit|too many requests|over_email_send_rate_limit/i,
    mensagem: 'Muitas tentativas. Aguarde um pouco e tente de novo.',
  },
  {
    teste: /row-level security|permission denied|not authorized|jwt/i,
    mensagem: 'Você não tem permissão para fazer isso.',
  },
  {
    teste: /duplicate key|already exists|unique constraint/i,
    mensagem: 'Este registro já existe.',
  },
  {
    teste: /violates check constraint/i,
    mensagem: 'Algum dos dados informados não é válido.',
  },
];

const PADRAO = 'Algo deu errado. Tente novamente.';

function textoDoErro(error: unknown): string {
  if (typeof error === 'string') return error;
  if (error && typeof error === 'object') {
    const e = error as { message?: unknown; error_description?: unknown };
    if (typeof e.message === 'string') return e.message;
    if (typeof e.error_description === 'string') return e.error_description;
  }
  return '';
}

export function friendlyError(error: unknown): string {
  const texto = textoDoErro(error);
  if (!texto) return PADRAO;
  const regra = REGRAS.find((r) => r.teste.test(texto));
  return regra ? regra.mensagem : PADRAO;
}
