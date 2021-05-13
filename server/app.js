require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
// bracket is used to destructure the uri
const {MONGOURI} = require("./keys");

 
mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on("connected", ()=>{
    console.log("connected to MongoDB");
})
mongoose.connection.on("error", (err)=>{
    console.log("error connecting to MongoDB : ", err);
})

require("./models/user");
require("./models/post");
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
 
app.listen(5000, (req, res)=>{
    console.log("Server Connected to port 5000");
})