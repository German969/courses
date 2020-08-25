const express = require('express')
const passport = require('passport')
const session = require('express-session')

const app = express()

app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: true }))

// --- Session Handling ---
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const LocalStrategy = require('passport-local').Strategy

const sequelize = require('./database.js')
const User = require('./user.js')
// User.sync({ alter: true })

const sessionStore = new SequelizeStore({
  db: sequelize,
})
// sessionStore.sync()

// User lookup by email
passport.serializeUser((user, done) => {
  done(null, user.email)
})

passport.deserializeUser((email, done) => {
  User.findOne({ where: { email: email } }).then((user) => {
    done(null, user)
  })
})

// User session management
app.use(
  session({
    secret: '343ji43j4n3jn4jk3n', //enter a random string here
    resave: false,
    saveUninitialized: true,
    name: 'testingpassport',
    cookie: {
      secure: false, //CRITICAL on localhost
      maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    },
    store: sessionStore,
  }),
  passport.initialize(),
  passport.session()
)

// Authentication strategy for login
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async function (email, password, done) {
      if (!email || !password) {
        done('Email and password required', null)
        return
      }

      const user = await User.findOne({ where: { email: email } })

      if (!user) {
        done('User not found', null)
        return
      }

      const valid = await user.isPasswordValid(password)

      if (!valid) {
        done('Email and password do not match', null)
        return
      }

      done(null, user)
    }
  )
)

// --- API config ---

app.get('/', (req, res) =>
// Check for logged in user
req.session.passport ? res.render('index') : res.render('signup')
)

app.post('/register', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.create({ email, password })

    // Start user session
    req.login(user, (err) => {
      if (err) return res.render('error', { message: err })
      return res.redirect('/')
    })
  } catch (error) {
    res.statusCode = 500
    let message = 'An error occurred'
    if (error.name === 'SequelizeUniqueConstraintError') {
      message = 'User already exists. Use login instead.'
    }
    res.render('error', { message })
  }
})

app.get('/login', (req, res) => req.session.passport ? res.render('index') : res.render('login'))

app.post('/login', async (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.render('error', { message: err })
    if (!user) return res.render('error', { message: 'No user matching credentials' })

    req.login(user, (err) => {
      if (err) return res.render('error', { message: err })
      return res.redirect('/')
    })
  })(req, res)
})

// End session
app.get('/logout', async (req, res) => {
  req.logout()
  req.session.destroy()
  return res.redirect('/')
})

app.listen(3001, () => console.log('Server ready'))