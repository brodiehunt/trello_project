const LocalStrategy = require('passport-local');
const User = require('../models/User')

const LoginStrategy = new LocalStrategy({usernameField: "email"}, async (email, password, done) => {
  await User.findOne({email}).exec((err, user) => {
    if(err) {
      return done(err, null)
    }
    if (!user || !user.verifyPasswordSync(password)) {
      return done("Incorrect user details", null)
    }
    return done(null, user)
  });
});

module.exports = LoginStrategy;