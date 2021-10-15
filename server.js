'use strict';

// configure express //
const express = require('express');
const app = express();
require('dotenv').config();

// cors middleware //
var cors = require('cors');
app.use(cors());

// body parsing middleware //
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());

// load database middleware, schema, and methods //
require('./database/workspace/index.js')(app);

// load authentication middleware and routes //
require('./api/authentication/googleOAuth.js')(app);

// connect to mongodb database //
const mongoose = require('mongoose');

async function main() {
  mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  });
};

main().catch(err => console.log(err));

// main server init //
const port = process.env.SERVER_PORT || '3000';
app.listen(port, () => console.log(`Listening on port ${port}`));