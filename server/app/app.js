// Calling dependencies
const express = require("express");
const bodyParser = require("body-parser");

//const orderRoutes = require("./api/routes/orders");

const path = require("path");

//Middleware for uploading files to the backend
const fileUpload = require("express-fileupload");

//Load environmental variables
require("dotenv").config();

const app = express();

//file uploader middleware
app.use(fileUpload());
//bodyParser middleware
app.use(bodyParser.json());

//Routes
//app.use("/orders", orderRoutes);

//Designating folder with all the app contents
app.use(express.static("./client/public"));

//Setting up entry point for html 
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/index.html"));
});


module.exports = app;