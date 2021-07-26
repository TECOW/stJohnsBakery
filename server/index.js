const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const breads = require('./breads.json');
const sweets = require('./sweets.json');
const bakings = require('./bakings.json');

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
