const { createServer } = require("http")
const next = require("next")

module.exports = async ({ port }) => {
  const app = next({
    dev: false,
    quiet: false,
  })
  const handleRequest = app.getRequestHandler()
  await app.prepare()
  const server = createServer((req, res) => {
    return handleRequest(req, res)
  })
  server.listen(port)
  return { close: server.close() }
}

if (!module.parent) {
  module.exports({ port: 3030 })
}
