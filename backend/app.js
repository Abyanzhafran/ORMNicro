const express = require('express')
const app = express()
const cors = require('cors')
const employeeRouter = require('./router/employee')
const newsRouter = require('./router/news')

app.use(express.urlencoded({ extended: true }))

// enable cors for all request
app.use(cors())

// enable middleware
app.use(express.json())

// use specific route handler
app.use('/employee', employeeRouter)
app.use('/news', newsRouter)

// for testing
app.get('/', (req, res) => {
  res.status(200).send('<h2>Hello yoi mamen</h2>').end()
})

app.get('/boy', (req, res) => {
  res.status(200).send('<h2>Hello yoi boyy</h2>').end()
})

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});