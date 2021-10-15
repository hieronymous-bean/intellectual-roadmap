'use strict';

require('dotenv').config();

// configure express //
const express = require('express');
const app = express();

// -------------------------------------- //
// ---------- AUTHENTICATION ------------ //
// -------------------------------------- //




const session = require('express-session');
const passport = require('passport');

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

// session middleware //
app.use(session({
  secret: "tony",
  resave: false ,
  saveUninitialized: true ,
}));

app.use(passport.initialize()) // init passport on every route call
app.use(passport.session())    //allow passport to use "express-session"

// define user //
const authUser = (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}

// use google strategy as the passport authentication strategy //
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  passReqToCallback   : true
}, authUser));


passport.serializeUser( (user, done) => { 
  console.log(`\n--------> Serialize User:`)
  console.log(user)
   // The USER object is the "authenticated user" from the done() in authUser function.
   // serializeUser() will attach this user to "req.session.passport.user.{user}", so that it is tied to the session object for each session.  

  done(null, user)
} )


passport.deserializeUser((user, done) => {
  console.log("\n--------- Deserialized User:")
  console.log(user)
  // This is the {user} that was saved in req.session.passport.user.{user} in the serializationUser()
  // deserializeUser will attach this {user} to the "req.user.{user}", so that it can be used anywhere in the App.

  done (null, user)
})

app.get('/auth/google',
  passport.authenticate('google', { 
    scope:['email','profile']
  }
));

app.get('/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: 'http://localhost:8080/app/dashboard',
    failureRedirect: 'http://localhost:8080/auth/login'
}));


// -------------------------------------- //
// ---------- AUTHENTICATION ------------ //
// -------------------------------------- //

var logger = require('morgan');
app.use(logger('dev'));

// cors middleware //
const cors = require('cors');
app.use(cors());

// body parsing middleware //
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());

// load database middleware, schema, and methods //
require('./database/workspace/index.js')(app);

// load authentication middleware and routes //
// require('./api/authentication/googleOAuth.js')(app);

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