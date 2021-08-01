const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const breads = require('./breads.json');
const sweets = require('./sweets.json');
const bakings = require('./bakings.json');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin-hyoeun:minma630@cluster0.g2gca.mongodb.net/inputsDB", {useNewUrlParser: true});

const inputSchema = new mongoose.Schema ({
  name: String,
  email: String,
  phone: Number,
  message: String
});

const Input = mongoose.model("Input", inputSchema);

const input = new inputSchema ({
  name: {String},
  email: {String},
  phone: {Number},
  message: {String}
})

Input.insertOne([a], function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Sucessfully saved inputdatas");
  }
});



app.use(express.static(path.resolve(__dirname, '../app/public')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/breads", (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(breads));
});

app.get("/bakings", (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(bakings));
});

app.get("/sweets", (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(sweets));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});;
