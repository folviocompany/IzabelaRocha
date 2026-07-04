# Landing Page — Dra. Izabela Rocha · Estética Avançada

Landing page única (Astro + Tailwind CSS v4), 100% estática, focada em conversão via WhatsApp.
Paleta: vinho `#7B1E3A` · branco/off-white `#FAF7F2` · dourado `#C9A227`.

## Comandos

```bash
npm install     # instalar dependências
npm run dev     # servidor local em http://localhost:4321
npm run build   # build de produção (pasta dist/)
npm run preview # pré-visualizar o build
```

## Onde trocar os dados da cliente

**Tudo** que é conteúdo editável está em um único arquivo: [`src/data/site.ts`](src/data/site.ts).
Os itens pendentes estão marcados com `TODO`:

- **WhatsApp** (`site.whatsapp`) — formato `55` + DDD + número, apenas dígitos
- **Endereço, horários, Instagram, registro profissional** (CRBM/CRO etc.)
- **Mapa** (`site.mapsEmbed`) — no Google Maps: Compartilhar → Incorporar mapa → copiar a URL do `src`
- **Estatísticas** (anos de experiência, nº de procedimentos)
- **Serviços, depoimentos e FAQ** — revisar textos com a cliente

## Imagens

Todas as imagens são placeholders do Unsplash, centralizadas em `images` dentro de
`src/data/site.ts`. Ao receber as fotos reais, basta salvar em `public/` e trocar as URLs.

> ⚠️ **Antes & Depois**: obrigatório usar casos reais com autorização assinada antes de
> publicar. Os placeholders atuais simulam o efeito com filtro (antes = dessaturado).

## Notas técnicas

- Tailwind **v4**: a paleta de cores fica no `@theme` de `src/styles/global.css`
  (não existe `tailwind.config.mjs` — no v4 a configuração é feita no CSS).
- Tipografia: Playfair Display (títulos) + Inter (corpo), via Google Fonts.
- SEO: meta tags, Open Graph, JSON-LD (BeautySalon) e favicon em `src/layouts/Layout.astro`.
- Deploy: Vercel detecta Astro automaticamente (`npm run build` → `dist/`).
