const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// import helper functions for database lookups //
const { findOrCreateUser } = require('../../database/user/index');

// google oauth2.0 strategy //
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  findOrCreateUser((profile), function(err, data) {
    return done(err, data);
  })
}));

module.exports = function(app){
  app.get('/auth/google', passport.authenticate('google', { 
    scope: ['profile'] 
  }));

  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/auth/login' }),
  function(req, res) {
    console.log(req)
    res.send('ok')
  });

  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

}