const express = require('express');

// import fetch from 'node-fetch';

// var bodyParser = require('body-parser');
// const { json } = require('body-parser');
const path = require('path');

const app = express();
const cors = require('cors');
app.use(cors());

const { v4: uuidv4 } = require('uuid');

// const fs = require('fs');
var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'undergroundnook',
    api_key: '197948958869879',
    api_secret: 'UDvL3l6lxXSHc6Xdk1hb_nWzDH8'
});

const port = process.env.PORT || 3030;

app.use(express.json());

app.use(express.static(path.join(__dirname, '/client/build')));

// const postRoutes = require("./routes/api");
// app.use("/api", postRoutes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'src', 'Pages', 'Home.js'));
// })

const { MongoClient } = require('mongodb');
const { async } = require('q');
const uri = "mongodb+srv://TestUser:TestUserPass@undergroundnook.lh3mc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();

//--------------------------------------------------------------------------------------------------------------
// User endpoints

app.post('/add-user', async (req, res) => {

    console.log("adding new user");
    let username = req.body.username;
    let userid = req.body.userid;
    let email = req.body.email;

  try {
    //   await client.connect();
      let db = client.db('main');

        let newUser = { userid: userid, username: username, email: email, addresses: [] };
        let users = db.collection('users');

        let existinguser = await users.findOne({ userid: userid });
        if (!existinguser) {
            users.insertOne(newUser);

            console.log("added new user");

            res.json({
                success: true,
                err: 'Facebook user ' + username + ' added to database'
            });
        }
        else {
            res.json({
                success: false,
                err: 'Facebook user ' + username + ' already exists'
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

app.post('/get-user', async (req, res) => {

    console.log("looking for user");
    let userid = req.body.userid;
    console.log(userid);

    try {
        // await client.connect();
        let db = client.db('main');
        let users = db.collection('users');

        let existinguser = await users.findOne({ userid: userid });

        console.log(existinguser);
        if (existinguser) {
            res.send(existinguser);
        }
        else {
            res.json({
                success: false,
                err: 'Facebook user ' + userid + 'does not exist'
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

app.post('/add-address', async (req, res) => {

    console.log("looking for user");
    let userid = req.body.userid;
    console.log(userid);

    let address = req.body.address;
    console.log(address);
  try {
    //   await client.connect();
      let db = client.db('main');
      let users = db.collection('users');

        let existinguser = await users.findOne({ userid: userid });

        console.log(existinguser);
        if (existinguser) {
            let addrarray = existinguser.addresses;
            console.log(addrarray);
            addrarray.push(address);
            users.updateOne({userid: userid}, {$set:{addresses: addrarray}});
            console.log(existinguser);
            res.send(existinguser);
        }
        else {
            res.json({
                success: false,
                err: 'User ' + userid + 'does not exist'
            });
        }
    } catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'Add Address failed'
        });
    }
})

app.post('/get-addresses', async (req, res) => {

    console.log("looking for addresses");
    let userid = req.body.userid;
    console.log(userid);

    try {
        // await client.connect();
        let db = client.db('main');
        let users = db.collection('users');

        let existinguser = await users.findOne({ userid: userid });

        console.log(existinguser);
        if (existinguser) {
            res.send(existinguser.addresses);
        }
        else {
            res.json({
                success: false,
                err: 'Facebook user ' + userid + 'does not exist'
            });
        }
    } catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'User ' + userid + 'does not exist',
            error: e
        });
    }
})

app.post('/edit-address' , async (req, res) =>{

    console.log("looking for user");
    let userid = req.body.userid;
    console.log(userid);

    let old = req.body.old;

    let update = req.body.update;
  
    try {
        // await client.connect();
        let db = client.db('main');
        let users = db.collection('users');
  
        let existinguser = await users.findOne({userid:userid});
  
        console.log(existinguser);
        if(existinguser){
            console.log(old);
            let index = existinguser.addresses.findIndex(function(item, i){
                return item.address === old.address;
              });
            let addrarray = existinguser.addresses;
            addrarray[index] = update;
            users.updateOne({userid: userid}, {$set:{addresses: addrarray}});
            console.log(existinguser);
            res.send(existinguser);
        }
        else {
          res.json({
            success: false,
            err: 'User ' + userid +  'does not exist'
          });
        }
    } catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'Edit Address failed'
        });
    }
  })

  app.post('/edit-info' , async (req, res) =>{

    console.log("looking for user");
    let userid = req.body.userid;
    console.log(userid);

    let old = req.body.oldaddress;

    let update = req.body.newaddress;
  
    try {
        // await client.connect();
        let db = client.db('main');
        let users = db.collection('users');
  
        let existinguser = await users.findOne({userid:userid});
  
        console.log(existinguser);
        if(existinguser){
            let index = existinguser.addresses.indexOf(old);
            existinguser.addresses[index] = update;
            res.send(existinguser);
        }
        else {
          res.json({
            success: false,
            err: 'User ' + userid +  'does not exist'
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

  
//--------------------------------------------------------------------------------------------------------------
// Plant endpoints

app.post('/add-plant', async (req, res) => {

    console.log("adding new plant");
    let id = uuidv4();

    let species_name = req.body.sname;
    let common_name = req.body.cname;
    let description = req.body.desc;
    let price = req.body.price;
    let img = req.body.img;

  try {
    //   await client.close();
    //   await client.connect();
      let db = client.db('main');

        let newPlant = { id: id, species_name: species_name, common_name: common_name, description: description, price: price, img_url: img, availability: true };

        db.collection('plants').insertOne(newPlant);

        console.log("added new plant");

        res.json({
            success: true,
            err: 'Plant ' + scientific_name + 'added to database'
        });
    } catch (e) {
        console.log(e);
        res.status(400);
        res.json({
            success: false,
            err: 'Error adding ' + scientific_name + 'to database'
        });
    }
})

app.post('/update-plant', async (req, res) => {

    console.log("updating plant");
    let id = req.body.id;
    let species_name = req.body.sname;
    let common_name = req.body.cname;
    let description = req.body.desc;
    let price = req.body.price;
    let img = req.body.img;

    console.log(req.body);

    try {
        // await client.connect();
        let db = client.db('main');
        console.log(img);

        if (img) {
            db.collection('plants').updateOne({ id: id }, { $set: { species_name: species_name, common_name: common_name, description: description, price: price, img_url: img } })
        }
        else {
            db.collection('plants').updateOne({ id: id }, { $set: { species_name: species_name, common_name: common_name, description: description, price: price } })
        }


        console.log("updated plant");

        res.json({
            success: true,
            err: 'Plant ' + species_name + 'updated'
        });

    } catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'Error adding ' + species_name + 'to database'
        });
    }
})

app.get('/get-plants' , async (req, res) =>{
  try {
      console.log("connecting to db to get plants");
    //   await client.connect();
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

app.delete('/delete-plant', async (req, res) => {

    let id = req.body.id;

    try {

        console.log("connecting to db to get plants");
  
        // await client.connect();
        let db = client.db('main');
        let collection = db.collection('plants');
        let document = await collection.deleteOne({ id: id });

        console.log("Deleted: ", document);
        res.send(document);

    } catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'Cannot find plant'
        });
    }

})

app.delete('/delete-order', async (req, res) => {

  let id = req.body.id;

  try {

      console.log("connecting to db to delete order");

      // await client.connect();
      let db = client.db('main');
      let collection = db.collection('orders');
      let document = await collection.deleteOne({id: id});

      console.log("Deleted: ", document);
      res.send(document);
      
  }catch (e) {
      res.status(400);
      res.json({
          success: false,
          err: 'Cannot find order'
      });
  }

})

//--------------------------------------------------------------------------------------------------------------
// Cart endpoints

app.post('/add-to-cart', async (req, res) => {

    console.log("adding plant to cart");
    let userid = req.body.userid;
    let plant = req.body.plant;

  try {
    // await client.connect();
    let db = client.db('main');

        let carts = db.collection('carts');
        let user_cart = await carts.findOne({ userid: userid });
        if (!user_cart) {
            carts.insertOne({ userid: userid, plants: [plant], total_price: plant.price, size: 1 });

            console.log("added plant to new cart for user");

            res.json({
                success: true,
                err: 'Plant ' + plant.id + ' added to new cart'
            });
        }
        else {
            user_cart.plants.push(plant);
            user_cart.total_price += plant.price;
            user_cart.size += 1;

            console.log("added plant to existing cart for user");

            res.json({
                success: true,
                err: 'Plant ' + plant.id + ' added to existing cart'
            });
        }
    } catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'Could not add plant to cart'
        });
    }
})

//--------------------------------------------------------------------------------------------------------------
// Order endpoints

// Add timestamp to this api with order
app.post('/add-order', async (req, res) => {

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
  
    try {

        // await client.connect();
        let db = client.db('main');

        let newOrder = { id: id, username: username, userid: userid, plants: plants, date: date, time: time, address: address, paymentmethod: paymentmethod, paymentinfo: paymentinfo, shippingcarrier: shippingcarrier, images: images };

        db.collection('orders').insertOne(newOrder);

        console.log("added new plant");

        res.json({
            success: true,
            err: 'Plant ' + scientific_name + 'added to database'
        });

    } catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'Error adding ' + scientific_name + 'to database'
        });
    }
})

app.get('/get-orders' , async (req, res) =>{

    try {

        console.log("connecting to db to get plants");
  
        // await client.connect();
        let db = client.db('main');
        let collection = db.collection('orders');
        let document = await collection.find();
        let items = await document.toArray();

        console.log(items);
        res.send(items);
    } catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'Cannot get the plant data'
        });
    }
})

app.post('/get-order' , async (req, res) =>{

    let orderid = req.body.orderid;

    try {
  
        console.log("connecting to db to get plants");
  
        // await client.connect();
        let db = client.db('main');
        let collection = db.collection('orders');
        let document = await collection.findOne({id:orderid});
  
        console.log(document);
        res.send(document);
    }catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'Cannot get the plant data'
        });
    }
  })

app.post('/update-order' , async (req, res) =>{

    console.log("body",req.body);
    let orderid = req.body.id;
    let paystatus = req.body.paystatus;
    let paymentmethod = req.body.paymentmethod;
    let paymentinfo = req.body.paymentinfo;
    let address = req.body.address;
    let shippingcarrier = req.body.shippingcarrier;
    let orderstatus = req.body.orderstatus;
    let price = req.body.price;

    try {
  
        console.log("connecting to db to get plants");
  
        // await client.connect();
        let db = client.db('main');
        db.collection('orders').updateOne({id: orderid}, {$set:{paystatus: paystatus, orderstatus: orderstatus, address: address, paymentmethod: paymentmethod, paymentinfo: paymentinfo, price: price, shippingcarrier: shippingcarrier}})
  
        console.log("updated order");
  
        res.json({
            success: true,
            err: 'Order ' + orderid +  'updated'
        });
    }catch (e) {
      console.log(e);
        res.status(400);
        res.json({
            success: false,
            err: 'Cannot get the plant data'
        });
    }
  })

  app.post('/get-order-plants' , async (req, res) =>{

    let plants = req.body.plants;
    console.log(plants);

    try {
  
        console.log("connecting to db to get order plants");
  
        // await client.connect();
        let db = client.db('main');
        let collection = db.collection('plants');

        let retplants = [];
        for(plantid of plants){
            console.log(plantid);
            let document = await collection.findOne({id:plantid});
            retplants.push(document);
        }
        
  
        console.log(retplants);
        res.send(retplants);
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

      let userid = req.body.userid;
      console.log("connecting to db to get user");

    //   await client.connect();
      let db = client.db('main');
      let collection = db.collection('orders');
      let document = await collection.find({userid: userid});
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

//--------------------------------------------------------------------------------------------------------------



app.listen(port, () => {
    console.log(`Listening on *: ${port}`)
});

// Create an HTTP service.
// http.createServer(app).listen(3000);
// Create an HTTPS service identical to the HTTP service.
// https.createServer(options, app).listen(3000);