const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3081;
const cors = require('cors');
const dummyData = require('./dummy');
const fs = require('fs');



app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/dist')));

app.get('/', (req, res) => {
  res.send("Selamlar");
});

app.get('/api/cart', (req, res) => {
  res.send(dummyData.dummyCart);
});
app.post('/api/cart/addItem', (req, res) => {
  let itemReq = Object.assign({}, req.body);
  let itemDb = dummyData.dummyCart.items.find(item => {console.log(item.content.id,"sad");console.log(itemReq.content.id); return item.content.id === itemReq.content.id});
  console.log(itemDb);
  if (itemDb?.content.count >= 1) {
    itemDb.content.count++;
  }
  else {
    dummyData.dummyCart.items.push(itemReq);
  }
  dummyData.dummyCart.total += itemReq.content.price;

  res.send("success");
});


app.post('/api/cart/removeItem',(req,res)=>{
  const itemId = Object.assign({}, req.body);
  const item = dummyData.dummyCart.items.find(item => item.content.id === itemId.id);
  if (item?.content.count === 1) {
    dummyData.dummyCart.items.splice(dummyData.dummyCart.items.indexOf(item), 1);
    dummyData.dummyCart.total -= item.content.price;
  }
  else if (item?.content.count > 1) {
    item.content.count--;
    dummyData.dummyCart.total -= item.content.price;
  }
  else {
    res.send("fail");
  }
  res.send("success");
});


app.get('/api/items', (req, res) => {
  res.send(dummyData.dummyItems);
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

