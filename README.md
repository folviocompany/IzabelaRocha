# Landing Page — Dra. Izabela Rocha · Estética Avançada

Landing page única (Astro + Tailwind CSS v4), 100% estática, focada em conversão via WhatsApp.
Paleta: vinho `#7B1E3A` · branco/off-white `#FAF7F2` · dourado `#C9A227`.

## Comandos

```bash
npm install     # instalar dependências
npm run dev     # servidor local em http://localhost:4321
npm run build   # build de produção (pasta dist/)
npm run preview # pré-visualizar o build
npm run validate # tipos + build + testes no navegador
```

## Onde trocar os dados da cliente

Os dados principais ficam em [`src/data/site.ts`](src/data/site.ts); os textos de apresentação também aparecem nos componentes.
Os itens pendentes estão marcados com `TODO`:

- **WhatsApp** (`site.whatsapp`) — formato `55` + DDD + número, apenas dígitos
- **Endereço, horários, Instagram, registro profissional** (CRBM/CRO etc.)
- **Localização** — a rua é pública; o endereço completo é enviado no agendamento
- **Estatísticas** (anos de experiência, nº de procedimentos)
- **Serviços, depoimentos e FAQ** — revisar textos com a cliente

## Imagens

As fotos reais ficam em `public/` e `public/resultados/`. Os caminhos e a ordem
dos resultados são configurados em `src/data/site.ts`. O componente
`ResponsiveImage.astro` gera WebP em várias larguras durante o build, preservando
os arquivos originais. Não amplie fotos pequenas esperando recuperar detalhes.

Os depoimentos provisórios ficam ocultos com `site.showTestimonials = false`.
Substitua os relatos e retratos por material real autorizado antes de habilitar a seção.
A nota de avaliação também depende de uma fonte confirmada.

## Notas técnicas

- Tailwind **v4**: a paleta de cores fica no `@theme` de `src/styles/global.css`
  (não existe `tailwind.config.mjs` — no v4 a configuração é feita no CSS).
- Tipografia: Playfair Display (títulos) + Inter (corpo), via Google Fonts.
- SEO: meta tags, Open Graph, JSON-LD (BeautySalon) e favicon em `src/layouts/Layout.astro`.
- Deploy: Vercel detecta Astro automaticamente (`npm run build` → `dist/`).

## Revisão e publicação

As melhorias estão na branch `codex/revisao-qualidade`. A main só deve receber
um merge após a revisão da prévia e a aprovação dos testes. Publicar uma branch
não é o mesmo que integrá-la à main; conferir o projeto/branch de produção na Vercel.
O plano e as pendências estão em [docs/REVISAO.md](docs/REVISAO.md).

Os testes usam Edge no Windows e Chromium no CI. Em outras plataformas,
execute `npx playwright install chromium` antes de `npm test`.
