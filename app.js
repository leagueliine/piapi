const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

mongoose.connect(
  'mongodb+srv://kgfeio:Ursinha157@nodejscluster.5kuc9v9.mongodb.net/?retryWrites=true&w=majority'
);
mongoose.connection.on('connected', function () {
  console.log('connected to Database' + ' teste')
});
mongoose.connection.on('error', err => {
  console.log('Database error' + err)
});

app.get('/', function (req, res) {
  res.send('END POINT INVÁLIDO!')
});

const routes = require('./routes/api');

app.use('/api', routes);

//error handling middleware
app.use(function( err, req, res, next){
  console.log(err);
  //'res.status(422)' muda o status
  res.status(422) .send({error: err.message});
});
//fim do middleware
let port = 5000

app.listen(process.env.port || port, () => {
  console.log('Servidor em execução no porto: ' + port)
});
