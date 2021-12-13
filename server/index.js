const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");
port = 3081;
const cors = require("cors");
const dummyData = require("./dummy");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../my-app/dist")));

app.get("/", (req, res) => {
  res.send("Selamlar");
});

app.get("/api/cart", (req, res) => {
  res.send(dummyData.dummyCart);
});
app.post("/api/cart/addItem", (req, res) => {
  let itemReq = Object.assign({}, req.body);
  let itemDb = dummyData.dummyCart.items.find((item) => {
    console.log(item.content.id, "sad");
    console.log(itemReq.content.id);
    return item.content.id === itemReq.content.id;
  });
  console.log(itemDb);
  if (itemDb?.content.count >= 1) {
    itemDb.content.count++;
  } else {
    dummyData.dummyCart.items.push(itemReq);
  }
  dummyData.dummyCart.total += itemReq.content.price;

  res.send("success");
});

app.post("/api/cart/removeItem", (req, res) => {
  const itemId = Object.assign({}, req.body);
  const item = dummyData.dummyCart.items.find(
    (item) => item.content.id === itemId.id
  );
  if (item?.content.count === 1) {
    dummyData.dummyCart.items.splice(
      dummyData.dummyCart.items.indexOf(item),
      1
    );
    dummyData.dummyCart.total -= item.content.price;
  } else if (item?.content.count > 1) {
    item.content.count--;
    dummyData.dummyCart.total -= item.content.price;
  } else {
    res.send("fail");
  }
  res.send("success");
});

app.get("/api/items/summary", (req, res) => {
  const itemsSummary = [];
  const itemIds = [];
  while (itemIds.length < 10) {
    const itemId = Math.floor(Math.random() * dummyData.dummyItems.length);
    if (!itemIds.includes(itemId)) {
      itemIds.push(itemId);
      itemsSummary.push({
        id: dummyData.dummyItems[itemId].content.id,
        name: dummyData.dummyItems[itemId].content.name,
        price: dummyData.dummyItems[itemId].content.price,
        topPhoto: dummyData.dummyItems[itemId].photos[0],
      });
    }
  }
  res.send(itemsSummary);
});

app.get("/api/items", (req, res) => {
  res.send(dummyData.dummyItems);
});

app.get("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = dummyData.dummyItems.find(
    (item) => item.content.id === parseInt(itemId)
  );
  res.send(item);
});

app.get("/api/items/getByCategoryId/:id", (req, res) => {
  const categoryId = req.params.id;
  const items = dummyData.dummyItems.filter(
    (item) => item.content.categoryId === parseInt(categoryId)
  );

  res.send(getItemsSumarry(items));
});

app.get("/api/items/getBySubCategoryId/:id", (req, res) => {
  const subCategoryId = req.params.id;
  const items = dummyData.dummyItems.filter(
    (item) => item.content.subCategoryId === parseInt(subCategoryId)
  );
  res.send(getItemsSumarry(items));

});

app.get("/api/items/getBySubtitleId/:subTitleId/:id", (req, res) => {
  const subtitleId = req.params.id;
  const items = dummyData.dummyItems.filter(
    (item) => item.content.subtitleId === parseInt(subtitleId) && item.content.subCategoryId === parseInt(req.params.subTitleId)
  );
  res.send(getItemsSumarry(items));

});

function getItemsSumarry(items) {
  const itemsSummary = [];
  items.forEach((item) => {
    itemsSummary.push({
      id: item.content.id,
      name: item.content.name,
      price: item.content.price,
      topPhoto: item.photos[0],
    });
  });
  return itemsSummary;
}

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});