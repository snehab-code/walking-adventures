const app = require('./app')
const {port} = require('../../config.json')
const server = app.listen(port, () => {
    console.log(`listening on ${port}`)

    const router = require('./routes')
    app.use('/', router)
})

module.exports = server