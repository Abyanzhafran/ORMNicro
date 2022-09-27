const express = require('express')
const app = express()
const path = require('path');
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})