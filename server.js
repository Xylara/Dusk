import { consola } from 'consola'
import express from 'express'
import wisp from 'wisp-server-node'
import http from 'node:http'
import path from 'node:path'
import { build } from 'vite'

const httpServer = http.createServer()

const app = express()
const port = process.env.PORT || 8080

consola.start('Building frontend')
await build()

app.use(express.static('dist'))

app.get('/', (_req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'))
})
app.get('/sh', (_req, res) => {
  res.sendFile(path.resolve('dist/apps','sh.html'))
})
app.get('/fman', (_req, res) => {
  res.sendFile(path.resolve('dist/apps','filemanager.html'))
})
httpServer.on('request', (req, res) => {
  app(req, res)
})

httpServer.on('upgrade', (req, socket, head) => {
  if (req.url?.startsWith('/wisp/')) {
    wisp.routeRequest(req, socket, head)
  } else {
    socket.end()
  }
})

httpServer.on('listening', () => {
  consola.info(`Listening on http://localhost:${port}`)
})

httpServer.listen({
  port
})