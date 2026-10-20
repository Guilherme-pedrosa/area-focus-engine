# HTML público para a publicação

`npm run build` executa o Vite com seu manifesto de arquivos e pré-renderiza
todas as URLs já existentes em `public/sitemap.xml`. Cada rota recebe seu
próprio `dist/<rota>/index.html`, com o conteúdo real do mesmo `App`, título,
descrição, canonical e JSON-LD produzidos pelos componentes React. A home fica
em `dist/index.html`. O JavaScript e CSS gerados pelo Vite são preservados para
os menus, navegação, formulário e vídeo.

O processo não acessa o Supabase, credenciais, APIs ou dados de clientes. Os
efeitos React e consultas que dependem do navegador continuam apenas no cliente.
O blog mantém sua página pública e carrega os artigos no navegador; conteúdos
de artigos do CMS não são capturados por este pré-renderizador. As rotas admin
não fazem parte do sitemap e não são pré-renderizadas.

O build falha se uma URL do sitemap estiver vazia ou redirecionada, tiver
canonical diferente da URL pública, metadados faltantes, H1 duplicado, conteúdo
duplicado, `noindex`, JSON-LD inválido ou arquivo de imagem/vídeo/CSS/JavaScript
local ausente. O resultado verificável fica em `dist/prerender-report.json`.
Para repetir apenas a validação da saída existente, use `npm run test:prerender`.

## Verificação no servidor publicado

A existência dos arquivos no build não confirma como o provedor os serve.
Após publicar, solicitar sem executar JavaScript a home, `/contratos-pcm`,
`/limpeza-de-coifas`, uma página de marca e uma página de sintoma; conferir que
cada resposta contém o H1 e canonical daquela rota. Confirmar também o
sitemap, robots, vídeo, imagens e navegação pelo navegador. Se o hosting
reescrever todas as URLs para a home em vez de servir os arquivos de cada
diretório, é necessário ajustar a regra de publicação do provedor.

Este trabalho não altera o domínio nem as URLs públicas. A rota inexistente
continua dependendo da configuração do hosting para responder HTTP 404;
exibir a tela 404 no React não comprova status HTTP 404. Pré-renderização e
preservação das URLs reduzem riscos de migração, mas não garantem posições
ou prazos de indexação no Google.
