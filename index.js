const app = require('express')

const server = app()
server.listen(2312, () => {
    console.log('server is running...')
})
