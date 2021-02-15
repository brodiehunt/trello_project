const passport = require('passport')
const User = require('../models/User')

passport.serializeUser((user, done) => {
  console.log("serialize user", user)
  done(null, user._id)

});

passport.deserializeUser(function(id, done) {
  console.log("deserializeUser", id)
  User.findById(id, function(err, user) {
    done(err, user)
  });
});

const RegisterStrategy = require('./registerStrategy');
const LoginStrategy = require('./loginStrategy');

passport.use('local-register', RegisterStrategy)
passport.use('local-login', LoginStrategy)

module.exports = passport;




