require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const routes = require('./routes');

const app = express();

function setupDatabase() {

    const mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    };

    mongoose.connection.on('connected', () => {
        console.log('Aplicação conectada ao banco de dados! =)');
        requireDir('./Models');
    });

    mongoose.connection.on('error', () => {
        console.log('Erro ao se conectar com o banco de dados! X(');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('A aplicação foi desconectada do banco de dados! =(');
    });

    mongoose.connect('mongodb+srv://danielfalcao:Password@free-ebhje.gcp.mongodb.net/agenda-db?retryWrites=true&w=majority', mongooseOptions);
}

function setupUse() {
    app.use(express.json());
    app.use('/api', routes);
}

setupDatabase()
setupUse()

app.listen(process.env.PORT || 3000);