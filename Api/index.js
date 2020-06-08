const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true } )
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(err);
});

requireDir('./Models');

app.use(express.json());
app.use('/api', routes);

app.listen(3333);