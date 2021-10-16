'use strict';
require('dotenv').config();

// configure express //
const express = require('express');
const app = express();

// body parsing middleware //
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());

// use morgan for logger //
var logger = require('morgan');
app.use(logger('dev'));

// cors middleware //
const cors = require('cors');
app.use(cors());

// load database middleware, schema, and methods //
require('./database/workspace/index.js')(app);

// load authentication middleware and associated routes //
require ('./api/authentication/passwordAuth')(app);

// connect to mongodb database //
const mongoose = require('mongoose');
async function main() {
  mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  });
};
main().catch(err => console.log(err));

// set headers for all routes to fix cors issues //
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// session middleware //
app.use(session({
  secret: "tony",
  resave: false ,
  saveUninitialized: true ,
}));

// init passport on every route call //
app.use(passport.initialize());

// allow passport to use express-session //
app.use(passport.session());

// main server init //
const port = process.env.SERVER_PORT || '3000';
app.listen(port, () => console.log(`Listening on port ${port}`));