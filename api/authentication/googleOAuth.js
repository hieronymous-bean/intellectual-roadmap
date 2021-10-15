const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// import helper functions for database lookups //
const { findOrCreateUser } = require('../../database/user/index');

module.exports = function(app){

  // google oauth2.0 strategy //
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: [ 'profile' ]
  },
  function(accessToken, refreshToken, profile, done) {
    findOrCreateUser((profile), function(err, data) {
      return done(err, data);
    })
  }));

  app.get('/auth/google', passport.authenticate('google', { 
    scope: ['profile'] 
  }));

  app.get('/auth/google/callback', passport.authenticate('google', { 
    successRedirect: '/app/dashboard',
    failureRedirect: '/auth/login' 
  }));

  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

}