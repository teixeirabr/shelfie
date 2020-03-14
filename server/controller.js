module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get("db");
    db.get_products()
      .then(products => {
        console.log("here", products);
        return res.status(200).send(products);
      })
      .catch(err => console.log(err));
  },

  getProduct: (req, res) => {
    const db = req.app.get("db"),
      { id } = req.params;
    db.get_product(id)
      .then(product => res.status(200).send(product))
      .catch(err => console.log(err));
  },

  addProduct: (req, res) => {
    const db = req.app.get("db"),
      { name, price, img } = req.body;
    db.add_product(name, price, img)
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => console.log(err));
  },
  deleteProduct: (req, res) => {
    const db = req.app.get("db"),
      { id } = req.params;
    db.delete_product(id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => res.status(500).send(err));
  },
  editProduct: (req, res) => {
    const db = req.app.get("db"),
      { id } = req.params,
      { name, price, img } = req.body;
    db.edit_product(id, name, price, img)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => res.status(500).send(err));
  }
};
