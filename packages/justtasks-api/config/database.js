const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('DB online')
    } catch (e) {
        console.log(e)
        throw new Error('Error initialising the database')
    }
}

module.exports = {
    dbConnection
}