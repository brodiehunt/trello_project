const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const passport = require('./config/passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);


// require the routers
const authRouter = require('./routes/auth_routes');
const boardRouter = require('./routes/board_routes')

const mongoose = require('mongoose');


const app = express();

require('dotenv').config()
const db = process.env.MongoURI
const PORT = process.env.PORT
const client = process.env.DEV_CLIENT


mongoose.connect(db, {
  useNewURLParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Mongoose connected")
})
.catch((err) => {
  console.log("some error connecting mongoose", err)
})

app.use(cookieParser());

app.use(cors({
  origin: client,
  credentials: true
}))


app.use(session({
  secret: "secretcode",
  resave: false,
  saveUnitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection})
}))


app.use(express.json());
app.use(express.urlencoded());

// require passport middleware;
app.use(passport.initialize());
app.use(passport.session());

//routes
app.get('/', (req, res) => {res.send("Hello from Express")})
app.use('/users', authRouter)
app.use('/boards', boardRouter)




//server
let server = app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})


module.exports = {server}