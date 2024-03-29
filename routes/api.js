const express = require("express");
const router = express.Router();
// const postControllers = require("../controllers/postControllers");

// router.route("/").get(postControllers.getAllPosts);

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://TestUser:TestUserPass@undergroundnook.lh3mc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();

router.post('/add-user', async (req, res) => {

    console.log("adding new user");
    let username = req.body.username;
    let userid = req.body.userid;
    let email = req.body.email;
    let phonenumber = req.body.phonenumber;

  try {
    //   await client.connect();
      let db = client.db('main');

        let newUser = { userid: userid, username: username, email: email, addresses: [], phonenumber: phonenumber };
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

router.post('/get-user', async (req, res) => {

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

router.post('/add-address', async (req, res) => {

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

router.post('/get-addresses', async (req, res) => {

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
            err: 'User ' + userid + 'does not exist',
            error: e
        });
    }
})

router.post('/edit-address' , async (req, res) =>{

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

  router.post('/edit-info' , async (req, res) =>{

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

router.post('/add-plant', async (req, res) => {

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
            err: 'Plant ' + species_name + 'added to database'
        });
    } catch (e) {
        console.log(e);
        res.status(400);
        res.json({
            success: false,
            err: 'Error adding ' + species_name + 'to database'
        });
    }
})

router.post('/add-purge-plant', async (req, res) => {

  console.log("adding purge plant to cart");
  let userid = req.body.userid;
  let id = uuidv4();

  let species_name = req.body.sname;
  let common_name = "";
  let description = "";
  let price = req.body.price;
  let img = req.body.img;

  try {
    let newPlant = {id: id, species_name: species_name, common_name: common_name, description: description, price: price, img_url: img, availability: false};

    let db = client.db('main');
    let carts = db.collection('carts');
    let user_cart = await carts.findOne({userid: userid});

    if (!user_cart) {
      carts.insertOne({userid: userid, plants: [newPlant], total_price: price, size: 1});

      console.log("added plant to new cart for user");

      res.json({
          success: true,
          err: 'Plant ' + id + ' added to new cart'
      });
    }
    else {
      let new_price = user_cart.total_price + price;
      let new_size = user_cart.size + 1;
      let new_plants = user_cart.plants;

      for (var i = 0; i < new_plants.length; i++) {
        if (new_plants[i].id == id) {
          res.json({
            success: false,
            err: 'Plant already exists in cart'
          })
          return;
        }
      }
      new_plants.push(newPlant);

      carts.updateOne({userid: userid}, {$set: {plants: new_plants, total_price: new_price, size: new_size}});

      console.log("added plant to existing cart for user");

      res.json({
          success: true,
          err: 'Plant ' + id + ' added to existing cart'
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400);
    res.json({
        success: false,
        err: 'Error adding purge plant ' + species_name
    });
  }
})

router.post('/update-plant' , async (req, res) =>{

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

router.get('/get-plants' , async (req, res) =>{
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

router.get('/get-available-plants' , async (req, res) =>{
  try {
      console.log("connecting to db to get plants");
    //   await client.connect();
      let db = client.db('main');
      let collection = db.collection('plants');
      let document = await collection.find({availability: true});
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

router.delete('/delete-plant', async (req, res) => {

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

//--------------------------------------------------------------------------------------------------------------
// Cart endpoints

router.post('/add-to-cart', async (req, res) => {

    console.log("adding plant to cart");
    let userid = req.body.userid;
    let plantid = req.body.plantid;

  try {
    // await client.connect();
    let db = client.db('main');

    let carts = db.collection('carts');
    let plants = db.collection('plants');
    let user_cart = await carts.findOne({ userid: userid });
    let plant = await plants.findOne({id: plantid});
    plants.updateOne({id: plantid}, {$set: {availability: false}});
    if (!user_cart) {
        carts.insertOne({ userid: userid, plants: [plant], total_price: plant.price, size: 1 });

        console.log("added plant to new cart for user");

        res.json({
            success: true,
            err: 'Plant ' + plant.id + ' added to new cart'
        });
    }
    else {
      let new_price = user_cart.total_price + plant.price;
      let new_size = user_cart.size + 1;
      let new_plants = user_cart.plants;

      for (var i = 0; i < new_plants.length; i++) {
        if (new_plants[i].id == plant.id) {
          res.json({
            success: false,
            err: 'Plant already exists in cart'
          })
          return;
        }
      }
      new_plants.push(plant);

      carts.updateOne({userid: userid}, {$set: {plants: new_plants, total_price: new_price, size: new_size}});

      console.log("added plant to existing cart for user");

      res.json({
          success: true,
          err: 'Plant ' + plant.id + ' added to existing cart'
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400);
    res.json({
        success: false,
        err: 'Could not add plant to cart'
    });
  }
})

router.post('/get-cart', async (req, res) => {

  console.log("getting plants from user cart");
  let userid = req.body.userid;

  try {
    // await client.connect();
    let db = client.db('main');

    let carts = db.collection('carts');
    let user_cart = await carts.findOne({userid: userid});
    if (!user_cart) {
      console.log("No plants in cart");

      res.json({
        success: true,
        err: 'No plants in cart for user ' + userid
      });
    }
    else {
      res.send(user_cart);
    }
  } catch (e) {
    res.status(400);
    res.json({
      success: false,
      err: 'Could not get cart for user ' + userid
    })
  }
})

router.post('/remove-from-cart', async (req, res) => {

  console.log("removing plant from user cart");
  let userid = req.body.userid;
  let plantid = req.body.plantid;

  try {
    let db = client.db('main');
    let plants = db.collection('plants');
    plants.updateOne({id: plantid}, {$set:{availability: true}});

    let carts = db.collection('carts');
    let user_cart = await carts.findOne({userid: userid});

    let user_plants = user_cart.plants;
    let plant_i = -1;
    for (var i = 0; i < user_plants.length; i++) {
      if (user_plants[i].id == plantid) {
        plant_i = i;
        break;
      }
    }

    if (plant_i == -1) {
      res.json({
        success: false,
        err: 'Plant ' + plantid + ' does not exist in user cart'
      })
    }
    else {
      let remove_plant = user_plants[plant_i];

      if (user_cart.size == 1) {
        carts.deleteOne({userid: userid});
      }
      else {
        carts.updateOne({userid: userid}, {$set: {
          plants: user_plants.slice(0, plant_i).concat(user_plants.slice(plant_i+1)),
          total_price: user_cart.total_price - remove_plant.price,
          size: user_cart.size - 1
        }});
      }

      console.log("removed plant from user cart");

      res.json({
        success: true,
        err: 'Plant ' + plantid + ' removed from user cart'
      })
    }
  } catch (e) {
    console.log(e);
    res.status(400);
    res.json({
      success: false,
      err: 'Could not get cart for user ' + userid
    })
  }
})

//--------------------------------------------------------------------------------------------------------------
// Order endpoints

// Add timestamp to this api with order
router.post('/place-order', async (req, res) => {

    console.log("adding new order");
    console.log(req.body);
    let id = uuidv4();
    let username = req.body.username;
    let userid = req.body.userid;
    let phonenumber = req.body.phonenumber;
    let date = Date.toString();
    let time = Date.now();
    let price = req.body.price;
    let address_name = req.body.address_name;
    let address_st = req.body.address_st;
    let address_aptno = req.body.aptno;
    let address_city = req.body.address_city;
    let address_state = req.body.address_state;
    let address_zip = req.body.address_zip;
    let paymentmethod = req.body.payment;
    let paymentinfo = req.body.payment_username;
    let shippingcarrier = req.body.shipping;
    let plantids = req.body.plantids;
  
    try {
        let db = client.db('main');
        let newOrder = {
          id: id,
          username: username,
          userid: userid,
          phonenumber: phonenumber,
          plants: plantids,
          time: time,
          address: address_st,
          aptno: address_aptno,
          city: address_city,
          state: address_state,
          zip: address_zip,
          paymentmethod: paymentmethod,
          paymentinfo: paymentinfo,
          shippingcarrier: shippingcarrier,
          price: price,
          orderstatus: "pending",
          paystatus: "pending"
        };
        db.collection('orders').insertOne(newOrder);
        console.log("placed order");

        db.collection('carts').deleteOne({userid: userid});
        console.log("removed cart");

        res.json({
          success: true,
          err: 'Order ' + id + 'placed in database'
        });
    } catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'Error adding order ' + id + 'to database'
        });
    }
})

router.get('/get-orders' , async (req, res) =>{

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

router.post('/get-order' , async (req, res) =>{

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

router.post('/update-order' , async (req, res) =>{

    console.log("body",req.body);
    let orderid = req.body.id;
    let paystatus = req.body.paystatus;
    let paymentmethod = req.body.paymentmethod;
    let paymentinfo = req.body.paymentinfo;
    let address = req.body.address;
    let aptno = req.body.aptno;
    let city = req.body.city;
    let state = req.body.state;
    let zip = req.body.zip;
    let shippingcarrier = req.body.shippingcarrier;
    let orderstatus = req.body.orderstatus;
    let price = req.body.price;

    try {
  
        console.log("connecting to db to get plants");
  
        // await client.connect();
        let db = client.db('main');
        db.collection('orders').updateOne({id: orderid}, {$set:{paystatus: paystatus, orderstatus: orderstatus, address: address, aptno: aptno, city: city, state: state, zip: zip, paymentmethod: paymentmethod, paymentinfo: paymentinfo, price: price, shippingcarrier: shippingcarrier}})
  
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

router.delete('/delete-order', async (req, res) => {

  let id = req.body.id;
  let plants = req.body.plants;

  try {

      console.log("connecting to db to delete order");

      // await client.connect();
      let db = client.db('main');
      let collection = db.collection('orders');
      let plantsdb = db.collection('plants');

      for(plantid of plants){
        plantsdb.updateOne({id: plantid}, {$set:{availability: true}});
      }

      let document = await collection.deleteOne({id: id});

      console.log("Deleted: ", document);
      res.send(document);
      
  } catch (e) {
      res.status(400);
      res.json({
          success: false,
          err: 'Cannot find order'
      });
  }

})

router.post('/get-order-plants' , async (req, res) =>{

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
  } catch (e) {
      res.status(400);
      res.json({
          success: false,
          err: 'Cannot get the plant data'
      });
  }
})

router.post('/get-user-orders' , async (req, res) =>{
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
  } catch (e) {
      res.status(400);
      res.json({
          success: false,
          err: 'Cannot get the plant data'
      });
  }
})

router.post('/get-csv' , async (req, res) =>{

  shippingcarrier = req.body.shippingcarrier;

    try {

        console.log("connecting to db to get plants");
      //   await client.connect();
        orders = client.db("main").collection("orders")

        let document;
        if(shippingcarrier == "all"){
          document = orders.find({})
        }
        else{
          document = orders.find({shippingcarrier: shippingcarrier})
        }
        
        document.toArray((err, data) => {
            // if (err) throw err;
    
            console.log(data);
            const json2csvParser = new Json2csvParser({ header: true });
            const csvData = json2csvParser.parse(data);
    
            res.send(csvData);

            // const file = fs.createWriteStream("test.csv");
            // const request = http.get("/get-csv", function(response) {
            // response.pipe(file);})
        });
        // console.log(items);
        // res.send(items);
    }catch (e) {
        res.status(400);
        res.json({
            success: false,
            err: 'Cannot get the plant data'
        });
    }
  })


module.exports = router;