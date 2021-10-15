'use strict';

// configure express //
const express = require('express');
const app = express();
require('dotenv').config();

// required modules //
const bodyParser = require('body-parser');

// request body parsing middleware //
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());

// load database middleware, schema, and methods //
require('./database/workspace/index.js')(app);

// connect to mongodb database //
const mongoose = require('mongoose');

async function main() {
  mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  });
};

main().catch(err => console.log(err));

