const passport = require('passport')

const registerCreate = (req, res, next) => {
  const {email, password, passwordConfirm } = req.body;
  console.log("enter register controller")

  passport.authenticate('local-register', function(error, user, info) {
    console.log("enter passport callback")
    if (error) {
      try {
        throw new Error(error)
      } catch (err) {
        console.log("error block controller register")
        res.status(500)
        return res.json({
          message: err.message || "something went wrong"
        })
      }
    } else {
      req.login(user, (err) => {
        if (err) {return console.log("err", err)}
        return res.status(200).json({email: user.email, firstName: user.firstName, lastName: user.lastName, sessionID: req.sessionID, message: "User has been authenticated"})
      })
    }
  })(req, res, next)
}

const signInCreate = (req, res, next) => {
  passport.authenticate('local-login', function(error, user, info) {
    if (error) {
      try {
        throw new Error(error)
      } catch (err) {
        return res.status(500).json({message: err || "something went wrong"})

      }
    }
    req.login(user, (err) => {
      if (err) {return console.log("err", err) };
      return res.status(200).json({email: user.email, sessionID: req.sessionID, message: "User has been authenticated"})
    })
  })(req, res, next)
}


const logout = (req, res) => {
  console.log(req.sessionID)
  console.log(req.user)
  req.logout();
  req.session.destroy(()=> {
    console.log("after logout req.user", req.user)
    return res.json({message: "logout"})
  })
  
  
}


module.exports = {
  registerCreate,
  signInCreate,
  logout
}