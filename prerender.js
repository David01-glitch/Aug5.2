import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const { render } = await import(path.join(dist, 'server', 'entry-server.js'))

const SITE_ORIGIN = (process.env.SITE_ORIGIN || '').replace(/\/$/, '')

const routes = [
  '/',
  '/destinations',
  '/travel-guides',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/404'
]

for (const url of routes) {
  const { html } = render(url)
  const canonical = SITE_ORIGIN ? `<link rel="canonical" href="${SITE_ORIGIN}${url === '/404' ? '/404' : url}" />` : ''
  const page = template
    .replace('__CANONICAL__', canonical)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  const outPath = url === '/'
    ? path.join(dist, 'index.html')
    : path.join(dist, url.replace(/^\//, ''), 'index.html')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page)
  console.log('pre-rendered', url)
}

if (SITE_ORIGIN) {
  const today = new Date().toISOString().slice(0, 10)
  const urls = routes.filter(r => r !== '/404').map(r => `  <url><loc>${SITE_ORIGIN}${r}</loc><lastmod>${today}</lastmod></url>`).join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
  fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`)
  console.log('wrote sitemap.xml and robots.txt with origin', SITE_ORIGIN)
} else {
  fs.writeFileSync(path.join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n')
  console.log('SITE_ORIGIN not set — skipping sitemap.xml (set SITE_ORIGIN=https://your.domain to bake canonicals + sitemap)')
}
