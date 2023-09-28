const express = require('express')
const router = require('./routers/router')
const app = express()
const session = require('express-session')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/views'))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    sameSite: true
  }
}))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})