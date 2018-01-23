const Product = require('../models/product.js');

function Create(req, res) {
    console.log('Create Product');
    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStored) => {
        if (err) res.status(500).send({ message: 'Error: ' + err });
        else res.status(201).send();
    });
}

function Get(req, res) {
    res.send({ message: 'Get Product method' });
}

module.exports = {
    Create,
    Get
};
