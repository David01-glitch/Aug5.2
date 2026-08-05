import express from 'express'
import compression from 'compression'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, 'dist')
const port = process.env.PORT || 3000

const app = express()
app.set('trust proxy', 1)
app.disable('x-powered-by')
app.use(compression())

app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')
  next()
})

app.use(express.static(dist, {
  index: false,
  setHeaders: (res, filePath) => {
    if (/\.(?:js|css|woff2?|png|jpe?g|webp|svg|gif|ico)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    } else if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
    }
  }
}))

app.get(/.*/, (req, res, next) => {
  if (req.path.includes('.')) return next()
  const rel = req.path === '/' ? 'index.html' : path.join(req.path.replace(/^\//, ''), 'index.html')
  const file = path.join(dist, rel)
  if (fs.existsSync(file)) return res.sendFile(file)
  return res.status(404).sendFile(path.join(dist, '404', 'index.html'))
})

app.listen(port, () => console.log(`Lighthouse Explorer on :${port}`))
