const express = require('express');

// import fetch from 'node-fetch';

// var bodyParser = require('body-parser');
// const { json } = require('body-parser');
const path = require('path');

const app = express();
const cors = require('cors');
app.use(cors());

// const fs = require('fs');
// var cloudinary = require('cloudinary').v2;
// cloudinary.config({ 
//   cloud_name: 'undergroundnook', 
//   api_key: '197948958869879', 
//   api_secret: 'UDvL3l6lxXSHc6Xdk1hb_nWzDH8' 
// });

const port = process.env.PORT || 3030;

app.use(express.json());

app.use(express.static(path.join(__dirname, '/client/build')));

// const postRoutes = require("./routes/api");
// app.use("/api", postRoutes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'src', 'Pages', 'Home.js'));
// })

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://TestUser:TestUserPass@undergroundnook.lh3mc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/add-user' , async (req, res) =>{

  console.log("adding new user");
  let username = req.body.username;
  let userid = req.body.userid;
  let email = req.body.email;

  try {
      await client.connect();
      let db = client.db('main');

      let newUser = {userid: userid, username: username, email: email, addresses: []};
      let users = db.collection('users');

      let existinguser = await users.findOne({userid:userid});
      if (!existinguser) {
        users.insertOne(newUser);

        console.log("added new user");

        res.json({
            success: true,
            err: 'Facebook user ' + username +  ' added to database'
        });
      }
      else {
        res.json({
            success: false,
            err: 'Facebook user ' + username +  ' already exists'
        });
      }
  } catch (e) {
      res.status(400);
      res.json({
          success: false,
          err: 'User ' + username + 'does not exist'
      });
  }
})

app.post('/get-user' , async (req, res) =>{

    console.log("looking for user");
    let userid = req.body.userid;
    console.log(userid);
  
    try {
        await client.connect();
        let db = client.db('main');
        let users = db.collection('users');

        let existinguser = await users.findOne({userid:userid});

        console.log(existinguser);
        if(existinguser){
            res.send(existinguser);
        }
        else {
          res.json({
            success: false,
            err: 'Facebook user ' + userid +  'does not exist'
          });
        }
    } catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'User ' + userid + 'does not exist'
        });
    }
  })

app.post('/add-plant' , async (req, res) =>{

  console.log("adding new plant");
  let id = uuidv4();
  let scientific_name = req.body.sname;
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

// Add timestamp to this api with order
app.post('/add-order' , async (req, res) =>{

    console.log("adding new plant");
    let id = uuidv4();
    let username = req.body.username;
    let userid = req.body.userid;
    let date = Date().toString();
    let time = Date().now();
    let address = req.body.address;
    let paymentmethod = req.body.paymentmethod;
    let paymentinfo = req.body.paymentinfo;
    let shippingcarrier = req.body.shippingcarrier;
    let plants = req.body.plants;
    let images = req.body.images;
    let scientific_name = req.body.sname;
  
    try {
        await client.connect();
        let db = client.db('main');

        let newOrder = {id: id, username: username, userid: userid, plants: plants, date: date, time: time, address:address, paymentmethod: paymentmethod, paymentinfo: paymentinfo, shippingcarrier: shippingcarrier};
  
        db.collection('orders').insertOne(newOrder);
  
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

app.get('/get-orders' , async (req, res) =>{
    try {
  
        console.log("connecting to db to get plants");
  
        await client.connect();
        let db = client.db('main');
        let collection = db.collection('orders');
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

  app.post('/get-user-orders' , async (req, res) =>{
    try {
  
        let userid = req.body.id;
        console.log("connecting to db to get user");
        console.log(req.body);
        await client.connect();
        let db = client.db('main');
        let collection = db.collection('users');
        let orders = await db.collection('orders').find({userid: userid});
        let items = await orders.toArray();
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

// app.get('/get-user' , async (req, res) =>{
//   try {

//       let userid = req.body.userid;
//       console.log("connecting to db to get user");

//       await client.connect();
//       let db = client.db('main');
//       let collection = db.collection('user');
//       let document = await collection.findOne({userid: userid});
//       let items = await document.toArray();

//       console.log(items);
//       res.send(items);
//   }catch (e) {
//       res.status(400);
//       res.json({
//           success: false,
//           err: 'Cannot get the user data'
//       });
//   }
// })

app.listen(port, () => {
    console.log(`Listening on *: ${port}`)
});

// Create an HTTP service.
// http.createServer(app).listen(3000);
// Create an HTTPS service identical to the HTTP service.
// https.createServer(options, app).listen(3000);