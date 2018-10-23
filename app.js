const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'assets')))
app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'views/index.html')
  )
  console.log(req.ip);
})
app.post('/api', (req, res) => res.send('api response'))

app.listen(port, () => console.log('Example app listening on port: ' + port))
