const express = require('express');

// import fetch from 'node-fetch';

var bodyParser = require('body-parser');
const { json } = require('body-parser');

const app = express();
const cors = require('cors');
app.use(cors());

const fs = require('fs');
var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'undergroundnook', 
  api_key: '197948958869879', 
  api_secret: 'UDvL3l6lxXSHc6Xdk1hb_nWzDH8' 
});

const port = process.env.PORT || 3030;

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
      let users = db.collection('users');

      let existinguser = users.findOne({userid:userid});
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
            err: 'Facebook user ' + username +  'already exists'
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

app.get('/verify-user' , async (req, res) =>{

    console.log("adding new user");
    let userid = req.body.userid;
  
    try {
        await client.connect();
        let db = client.db('main');
  
        let existinguser = db.collection('users').findOne({id:userid});
  
        console.log("finding user");
        if(existinguser){
            res.json({
                success: true,
                err: 'Facebook user ' + userid +  ' added to database'
            });
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

app.post('/add-order' , async (req, res) =>{

    console.log("adding new plant");
    let id = uuidv4();
    let username = req.body.username;
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

        let newOrder = {id: id, username: username, plants: plants, date: date, time: time, address:address, paymentmethod: paymentmethod, paymentinfo: paymentinfo, shippingcarrier: shippingcarrier};
  
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
  
        console.log("connecting to db to get orders");
  
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
            err: 'Cannot get the order data'
        });
    }
  })

app.get('/get-user-orders' , async (req, res) =>{
  try {

      let userid = req.body.userid;
      console.log("connecting to db to get user");

      await client.connect();
      let db = client.db('main');
      let collection = db.collection('users');
      let document = await collection.findOne({id: userid}, {orders: 1, userid: 0, addresses: 0, username: 0, email: 0});

      console.log(document);
      res.send(document);
  }catch (e) {
      res.status(400);
      res.json({
          success: false,
          err: 'Cannot get the user order data'
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
          err: 'Cannot get the user data'
      });
  }
})

const addressMatch = (a1, a2) => {
  return (
    a1.name == a2.name &&
    a1.street == a2.street &&
    a1.city == a2.city &&
    a1.state == a2.state &&
    a1.zip == a2.zip
  );
}

app.get('/add-address', async (req, res) => {
  try {
    let userid = req.body.userid;

    await client.connect();
    let db = client.db('main');
    let users = db.collection('user');
    let user_addresses = await collection.findOne({id: userid}).addresses;

    let no_dups = true;
    for (address in user_addresses) {
      if (addressMatch(address, req.body.address)) {
        res.json({
          success: false,
          err: 'Address already exists in user entry'
        });
        no_dups = false;
        break;
      }
    }
    if (no_dups) {
      user_addresses.push(req.body.address);
      res.json({
        success: true,
        err: 'Added address to user'
      });
    }
  } catch (e) {
    res.status(400);
    res.json({
      success: false,
      err: 'Failed to add address'
    });
  }
})

app.get('/edit-address', async (req, res) => {
  try {
    let userid = req.body.userid;
    let index = req.body.address_index;
    let add_info = req.body.address;

    await client.connect();
    let db = client.db('main');
    let users = db.collection('users');
    let user_addresses = await collection.findOne({id: userid}).addresses;
    let address = user_addresses[index];

    address = add_info;
    res.json({
      success: true,
      err: 'Successfully edited address'
    });
  } catch (e) {
    res.status(400);
    res.json({
      success: false,
      err: 'Failed to edit address'
    });
  }
})

// app.use(express.static(__dirname + '/'));

app.listen(port, () => {
    console.log('Listening on *: 3030')
});

// Create an HTTP service.
// http.createServer(app).listen(3000);
// Create an HTTPS service identical to the HTTP service.
// https.createServer(options, app).listen(3000);