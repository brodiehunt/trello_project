const LocalStrategy = require('passport-local');
const User = require('./../models/User')

const RegisterStrategy = new LocalStrategy({usernameField: "email", passReqToCallback : true}, async (req, email, password, done) => {
  console.log("enter passport strategy", req.body)
  await User.findOne({email}).exec((err, user) => {
    
    if(err) {
      return done(err, null)
    }
    if(user) {
      
      return done("User already exists", null)
    }
    console.log("create new user example")
    let newUser = new User({
      email: email,
      password: password,
      profile: {
        firstName: req.body.firstName,
        lastName: req.body.lastName
      }
    })
    console.log('bout to save this shiet')
    newUser.save((err, user) => {
      if (err) {
        console.log('just entered the save error block')
        return done(err, null)
      }
      console.log('if im here the user should be created bruh')
      return done(null, user);
    });
  });
});

module.exports = RegisterStrategy;