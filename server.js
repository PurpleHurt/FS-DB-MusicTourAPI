// DEPENDENCIES
const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('authenticated!!!')
    } catch (e) {
        console.error('something went wrong: $(e');

    }
}

connect();

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})