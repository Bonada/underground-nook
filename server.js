const express = require('express');

// import fetch from 'node-fetch';

// var bodyParser = require('body-parser');
// const { json } = require('body-parser');
const path = require('path');

const app = express();
// const cors = require('cors');
// app.use(cors());

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

const postRoutes = require("./routes/api");
app.use("/api", postRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'src', 'Pages', 'Home.js'));
})


app.listen(port, () => {
    console.log(`Listening on *: ${port}`)
});

// Create an HTTP service.
// http.createServer(app).listen(3000);
// Create an HTTPS service identical to the HTTP service.
// https.createServer(options, app).listen(3000);