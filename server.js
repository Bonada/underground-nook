const express = require('express');
const fetch = require('node-fetch');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const app = express();
const port = 3000;
const https = require('https');
const fs = require('fs');
const options = {
  key: fs.readFileSync('./localhost.pem'),
  cert: fs.readFileSync('./localhost-key.pem'),
};

require('dotenv').config()

// console.log(options.cert);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://TestUser:TestUserPass@undergroundnook.lh3mc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function testgetPlants(){
    await client.connect();
    let db = client.db('main');
    let collection = db.collection('plants');
    let document = await collection.find();
    let items = await document.toArray();

    for(plant of items){
      console.log(plant);
    }
    client.close();
}
testgetPlants();

// app.use(express.static(__dirname + '/'));

app.listen(port, () => {
    console.log('Listening on *: 3000')
})

// Create an HTTP service.
// http.createServer(app).listen(3000);
// Create an HTTPS service identical to the HTTP service.
// https.createServer(options, app).listen(3000);