const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); 
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept');
  next();
});

server.use('/', routes);

server.use("*", (req, res)=>{
  res.status(404).send("not found")
});

server.use((err, req, res, next)=>{
  res.status(err.statusCode || 500).send({
      error: true,
      message: err.message,
  })
});

module.exports = server;