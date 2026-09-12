# Revisao de qualidade

## Isolamento

Branch de trabalho: `codex/revisao-qualidade`.
A `main` permanece no commit publicado `72924ec`.
Somente um merge posterior, apos revisao, leva estas alteracoes para producao.
Nao fazer reset nem force-push na main. Uma mudanca publicada pode ser desfeita
com um novo commit de revert.

## Implementado nesta etapa

- Depoimentos provisorios e navegacao correspondente ocultos pelo dado
  `site.showTestimonials = false`. A nota 5,0 sem fonte foi retirada.
- Navegacao compartilhada e identificadores para estatisticas.
- Intro com saida do logotipo corrigida e liberacao de emergencia se o modulo falhar.
- Conteudo visivel sem JavaScript; revelacoes ativadas por melhoria progressiva.
- Menu com foco controlado, Escape, inert e desbloqueio ao mudar para desktop.
- FAQ nativo com details/summary.
- Comparadores reutilizaveis com foco visivel e valor acessivel.
- Imagens locais responsivas em WebP, geradas no build; originais preservados.
- Efeitos separados em modulos e atualizados sob demanda.
- Canonical por pagina, 404 noindex, robots e sitemap.
- Checagem de tipos, testes de navegador e workflow de validacao.
- Atualizacoes de dependencias compativeis com a versao principal atual.

## Proximos passos, em ordem

1. Migracao de versao principal do Astro e suas dependencias. O audit ainda
   aponta 3 alertas (1 baixo, 1 alto, 1 critico) na arvore instalada.
   Isso nao comprova explorabilidade do site estatico publicado; e preciso
   avaliar cada aviso e testar a migracao separadamente, incluindo build e imagens.
2. Revisao visual dos enquadramentos da toxina e do HIFU. O layout atual foi
   preservado; definir proporcoes e pontos focais exige avaliar cada fotografia.
3. Catalogo: confirmar preenchimento labial, olheiras e bigode chines e conectar
   os resultados aos respectivos servicos.
4. Encurtar o percurso mobile e decidir a posicao do HIFU e da galeria.
5. Confirmar depoimentos reais, nota, cidade/estado, dominio, textos e promessas
   de resultado com a profissional. Somente depois habilitar depoimentos.
6. Decidir ampliacao de fotos, filtros, tipografia/contraste e medicao de contatos.
   HIFU precisa de originais maiores para uma ampliacao nitida.

## Validacao

`npm run validate` executa checagem de tipos, build e testes Playwright.
No Windows, os testes usam Microsoft Edge; no CI, Chromium.
Para outras plataformas: `npx playwright install chromium`.
As capturas e resultados dos testes ficam em `test-results/`, fora do Git.

Antes de integrar: revisar a pagina local, conferir os links de contato,
comparar as imagens otimizadas e executar novamente a validacao.
