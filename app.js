const express = require('express')
const path = require('path')
const app = express()
const AWS = require('aws-sdk')
const port = process.env.PORT || 3000

var credentials = new AWS.SharedIniFileCredentials({profile: 'itqiot'});
var region = 'eu-central-1'

AWS.config.update({region: region});
AWS.config.credentials = credentials;

console.log(credentials);
app.use(express.json())
app.use(express.static(path.join(__dirname, 'assets')))
app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'views/index.html')
  )
})
app.post('/api', (req, res) => {
  console.log(req.body)
  res.send('api response')
})

app.listen(port, () => console.log('Example app listening on port: ' + port))
