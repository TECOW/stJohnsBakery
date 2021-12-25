const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const breads = require('./breads.json');
const sweets = require('./sweets.json');
const bakings = require('./bakings.json');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin-hyoeun:minma630@cluster0.g2gca.mongodb.net/inputsDB", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static(path.resolve(__dirname, '../app/build')));

const inputSchema = new mongoose.Schema ({
  name: String,
  email: String,
  phone: Number,
  message: String
});

const Input = mongoose.model("Input", inputSchema);

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

app.post("/contact", (req, res) => {
  console.log(req.body);
  const input = new Input ({
    name: req.body.nameInput,
    email: req.body.emailInput,
    phone: req.body.phoneInput,
    message: req.body.messageInput
  })

  input.save();
  res.json({ok:true});
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});;
