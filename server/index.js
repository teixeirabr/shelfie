require("dotenv").config();
const express = require("express");
const massive = require("massive");
const cors = require("cors");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const controller = require("./controller");
app.use(express.json());
app.use(cors());

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then(db => {
    app.set("db", db);
    console.log("Db Connected :) !!!");
  })
  .catch(err => console.log(err));

app.get("/api/inventory", controller.getProducts);
app.post("/api/product", controller.addProduct);
app.get("/api/product/:id", controller.getProduct);
app.delete("/api/product/:id", controller.deleteProduct);
app.put("/api/product/:id", controller.editProduct);

app.listen(SERVER_PORT, () => console.log(`All good on port ${SERVER_PORT}`));
