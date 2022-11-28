const express = require('express')
const app = express()
// const db = require('./database')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))

// enable cors for all request
app.use(cors())

// enable middleware
app.use(express.json())

// use specific route handler
// app.use('/user', userRouter)
// app.use('/seller', sellerRouter)

// for testing
app.get('/', (req, res) => {
  res.status(200).send('<h2>Hello yoi mamen</h2>').end()
})

app.get('/boy', (req, res) => {
  res.status(200).send('<h2>Hello yoi boyy</h2>').end()
})

// app.get('/test', (req, res) => {
//   let query = "SELECT * FROM tbl_test"

//   db.query(query, (err, result) => {
//     if (!err) {
//       res.send(result);
//     }
//     if (err) {
//       res.status(400).send(err);
//       return;
//     }
//   });
// })

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]