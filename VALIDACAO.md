# Relatório de validação — v2.0.0

Testes executados localmente em 17/11/2026 com Chromium/Playwright, com HTML/CSS/JavaScript carregados em memória (navegação localhost/file foi bloqueada pelo ambiente de testes).

| Verificação | Desktop 1440px | Mobile 390px |
|---|---|---|
| Renderização de HTML/CSS/JS | OK | OK |
| Erros JavaScript na página | 0 | 0 |
| Rolagem horizontal | Não | Não |
| Total inicial de projetos | 6 | 6 |
| Filtro Dados (esperado: 2) | 2 | 2 |
| Mudança de idioma | OK | OK |
| Mudança do tema | OK | OK |
| Menu mobile | N/A | OK |

Validado também: sintaxe de `app.js` com `node --check`, arquivos essenciais presentes, navegação interna e ausência de links vazios. Conteúdo externo como foto original e fontes do Google depende de conectividade no navegador final; há fallback visual para a foto.

**Pendente:** testes reais de deploy e inspeção em domínio Netlify. Não usar a versão como publicada até que uma prévia seja validada na hospedagem.
