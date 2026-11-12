// Génère les PDF vectoriels des CV (texte sélectionnable, liens actifs).
// Usage : npm run build:cv  →  public/CV-Simeon-Azogbonon.pdf (FR) et -EN.pdf (EN)
import { createServer } from 'vite'
import puppeteer from 'puppeteer'

const TARGETS = [
  { route: '', output: 'public/CV-Simeon-Azogbonon.pdf' },
  { route: 'en', output: 'public/CV-Simeon-Azogbonon-EN.pdf' },
]

const server = await createServer({ server: { port: 0, open: false }, logLevel: 'error' })
await server.listen()
const { port } = server.httpServer.address()

const browser = await puppeteer.launch()
try {
  for (const { route, output } of TARGETS) {
    const page = await browser.newPage()
    await page.goto(`http://localhost:${port}/resume/${route}`, { waitUntil: 'networkidle0' })
    await page.evaluate(() => document.fonts.ready)

    // Ne garder que le CV : on masque le bouton et on retire les marges de la page.
    await page.addStyleTag({
      content: `
        @page { size: A4; margin: 0 }
        html, body { margin: 0; background: #fff }
        main > div:first-child { display: none !important }
        .vue-devtools__anchor, #vue-devtools-anchor, [class*="vue-devtools"] { display: none !important }
      `,
    })

    await page.pdf({
      path: output,
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true,
    })
    console.log(`PDF généré : ${output}`)
    await page.close()
  }
} finally {
  await browser.close()
  await server.close()
}
