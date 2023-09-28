const express = require('express')
const router = require('./routers/router')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})