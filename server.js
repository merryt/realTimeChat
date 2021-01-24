const server = require('server')
const { get } = require('server/router')

const port = process.env.PORT || 3000

server({ port }, [
    get('/', ctx => '<h1>Hey you</h1>')
])
    .then(()=> console.log(`cherver running at http://localhost:${port}`))
