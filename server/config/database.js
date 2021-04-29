const mongoose = require('mongoose')
const {connection_uri} = require('../../config.json')

const setupDB = async () => {
    try {
        await mongoose.connect(connection_uri)
        console.log('connected to db')
    } catch(err) {
        console.error(err, 'DB connection error')
    }   
}

module.exports = setupDB