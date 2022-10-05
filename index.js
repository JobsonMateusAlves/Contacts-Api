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

// setupDatabase()
setupUse()

var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/chatbot', function(req, res){
  res.sendFile(__dirname + '/Teste/index.html');
});

io.on('connection', function(socket){
  console.log(socket.id)
  socket.on('chat', function(msg){
    console.log(msg)
    io.emit('chat', msg);
    io.emit('chat', `hehe ${msg}`);
  });
});

var debug = []

app.get('/debug', function(req, res){
  res.json(debug);
});

app.post('/debug', function(req, res){
  debug.push(req.body.debug)
  res.json(debug);
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});


// app.listen(process.env.PORT || 3000);