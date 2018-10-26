const express = require('express')
const path = require('path')
const app = express()
const AWS = require('aws-sdk')
const port = process.env.PORT || 3000
AWS.config.update({region: 'eu-central-1'});
AWS.config.credentials = credentials;
var credentials = new AWS.SharedIniFileCredentials({profile: 'itqiot'});
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
var docClient = new AWS.DynamoDB.DocumentClient();





console.log(credentials);
app.use(express.json())
app.use(express.static(path.join(__dirname, 'assets')))
app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'views/index.html')
  )
})
app.get('/count', (req, res) => {
  console.log('api get recieved.');
  var body = req.body
  var params = {
    TableName: 'iot',
  }
  docClient.scan(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      res.send("ddb update Error")
    } else {
      console.log("Success", data);
      res.send(
        '<meta http-equiv="refresh" content="5" />' +
        '<H1 align="center">' +
          '<font size="7">' +
            'Voters: ' + data.Count +
          '</font>' +
        "</H1>"
      )
    }
  })
  console.log(req.body)
})
app.post('/api', (req, res) => {
  var body = req.body
  var params = {
    TableName: 'iot',
    Item: {
      'pkey': {S: body['pkey']},
      'name': {S: body['name']},
      'score': {N: body['score']}
    }
  }
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      res.send("ddb update Error")
    } else {
      console.log("Success", data);
      res.send("ddb update Success")
    }
  })
  console.log(req.body)
})

app.listen(port, () => console.log('Example app listening on port: ' + port))
