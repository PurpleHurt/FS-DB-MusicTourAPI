// DEPENDENCIES
const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI, ({ password: "01010101", username: "fullstack", host: 'localhost', port: 5432, database: 'music_tour', dialect: 'postgres' }))

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
});

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController);
const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController);
const stagesController = require('./controllers/stages_controller')
app.use('/stages', stagesController);


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
});