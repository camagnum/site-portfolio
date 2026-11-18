# Portfólio profissional — Magnum Benevides

**Versão em desenvolvimento: v2.0.0**  
**Site em produção (mantido intacto):** https://carlos-magnum.netlify.app/  
**Repositório original:** https://github.com/camagnum/site-portfolio

Reformulação do portfólio com apresentação profissional, trajetória, competências e estudos de caso. A identidade é focada no **trabalho profissional como desenvolvedor**, não em um catálogo pessoal de entretenimento.

## Funcionalidades da primeira entrega

- Layout premium responsivo e acessível, com CSS puro e sem dependências de build.
- Tema claro/escuro salvo no navegador; conteúdo em português e inglês.
- Seis estudos de caso com filtro por área e links para repositórios públicos verificados.
- Projetos privados e locais claramente identificados, sem links fictícios.
- Contato por e-mail, atalhos profissionais, metadados SEO e dados estruturados.
- Arquivo `version.json` para integração futura com o Meu Hub.

## Como testar

Abra `index.html` no navegador ou execute na pasta:

```bash
python -m http.server 8080
```

Visite http://localhost:8080. É um site estático; **não é uma aplicação Angular nesta primeira etapa**. A migração para Angular/TypeScript pode vir depois da validação visual e do conteúdo, sem comprometer o site publicado.

## Itens não incluídos ainda

- Imagens reais de capa dos projetos e descrições técnicas completas.
- Currículo PDF revisado para disponibilização.
- Área administrativa/autenticação com Supabase.
- Formulário com backend/antispam (contato por e-mail está funcional).
- Atualização automática do Meu Hub publicada.

## Publicação segura

Não substitua o conteúdo publicado sem validar a prévia. Recomendação: criar a branch `feature/portfolio-v2.0.0` a partir de `master`, copiar os arquivos, conferir o Deploy Preview no Netlify e só depois fazer merge.

Nenhum token, segredo, conteúdo corporativo confidencial ou dados de clientes deve ser publicado.
