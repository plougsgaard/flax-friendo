const fetch = require('node-fetch')
const Koa = require('koa')
const websocketify = require('koa-websocket')

const URL = 'http://localhost:8003'

const myProgramme = async (program) => {
  const res = await fetch(URL, { method: 'post', body: program })
  const json = await res.json()
  return json
}

const server = websocketify(new Koa())

server.ws.use(async ctx => {
  ctx.websocket.on('message', async message => {
    const result = await myProgramme(message)
    ctx.websocket.send(JSON.stringify(result))
  })
})

server.listen(8004)
