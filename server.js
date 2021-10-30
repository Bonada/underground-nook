const express = require('express');

import fetch from 'node-fetch';

var bodyParser = require('body-parser');
const { json } = require('body-parser');

const app = express();
const fs = require('fs');
var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'undergroundnook', 
  api_key: '197948958869879', 
  api_secret: 'UDvL3l6lxXSHc6Xdk1hb_nWzDH8' 
});

const port = 3000;

// function uploadimg() {
//   cloudinary.uploader.upload("zbALL.jpg", 
//     function(error, result) {console.log(result, error)});
// }

// uploadimg();

// console.log(options.cert);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://TestUser:TestUserPass@undergroundnook.lh3mc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function testgetPlants(){
    
}
testgetPlants();

// app.post('/endpoint', async (req, res) => {
//   try {

//     // Do functionality
//   } catch (e) {
//     // Error in endpoint
//   }
// });

app.post('/add-user' , async (req, res) =>{

  console.log("adding new user");
  let username = req.body.username;
  let userid = req.body.userid;
  let email = req.body.email;

  try {
      await client.connect();
      let db = client.db('main');

      let newUser = {userid: userid, username: username, email: email, addresses: []};

      db.collection('users').insertOne(newUser);

      console.log("added new user");

      res.json({
          success: true,
          err: 'Facebook user ' + username +  ' added to database'
      });
  } catch (e) {
      res.status(400);
      res.json({
          success: false,
          err: 'User ' + username + 'does not exist'
      });
  }
})

app.post('/add-plant' , async (req, res) =>{

  console.log("adding new plant");
  let id = uuidv4();
  let species_name = req.body.sname;
  let common_name = req.body.cname;
  let description = req.body.desc;
  let price = req.body.price;

  try {
      await client.connect();
      let db = client.db('main');

      let newPlant = {id: id, scientific_name: scientific_name, common_name: common_name, description: description};

      db.collection('plants').insertOne(newPlant);

      console.log("added new plant");

      res.json({
          success: true,
          err: 'Plant ' + scientific_name +  'added to database'
      });
  } catch (e) {
      res.status(400);
      res.json({
          success: false,
          err: 'Error adding ' + scientific_name + 'to database'
      });
  }
})

app.get('/get-plants' , async (req, res) =>{
  try {

      console.log("connecting to db to get plants");

      await client.connect();
      let db = client.db('main');
      let collection = db.collection('plants');
      let document = await collection.find();
      let items = await document.toArray();

      console.log(items);
      res.send(items);
  }catch (e) {
      res.status(400);
      res.json({
          success: false,
          err: 'Cannot get the plant data'
      });
  }
})

app.get('/get-user' , async (req, res) =>{
  try {

      let userid = req.body.userid;
      console.log("connecting to db to get user");

      await client.connect();
      let db = client.db('main');
      let collection = db.collection('user');
      let document = await collection.findOne({id: userid});
      let items = await document.toArray();

      console.log(items);
      res.send(items);
  }catch (e) {
      res.status(400);
      res.json({
          success: false,
          err: 'Cannot get the plant data'
      });
  }
})

// app.use(express.static(__dirname + '/'));

app.listen(port, () => {
    console.log('Listening on *: 3000')
});

// Create an HTTP service.
// http.createServer(app).listen(3000);
// Create an HTTPS service identical to the HTTP service.
// https.createServer(options, app).listen(3000);