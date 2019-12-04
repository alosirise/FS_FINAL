const mongoose = require('mongoose')
const Product = require('./models/productSchema')
// #5 Change URL to your local mongodb
const url = "mongodb://localhost:27017/products";
// ===============================

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

function getAllProducts(req, res) {

    Product.find({}, function (err, data) {
        if (err) {
            res.status(500).json({ status: "error", message: err });
        }
        res.json(data);
    });
}

function getProductById(req, res) {
    var pid = req.params.pid;
    // #6 Get a product by ID
    app.get('/api/products/:id', function (req, res) {
        var id = req.params.id;
        Product.find({ "_id": id }, function (err, products) {
            if (err) res.status(500).json(err);
            res.json(products);
        });
    });


  
    // ===============================
}

function updateProductById(req, res) {
    var payload = req.body
    var pid = req.params.pid;
    // #7 Update a product by ID (findByIdAndUpdate)
    app.put('/api/products/:id', function (req, res) {
        var id = req.params.id;
        var updateproduct = req.body;
    
        Product.findByIdAndUpdate(id, updateproduct, function (err) {
            if (err) res.status(500).json(err);
            res.json({ status: " Update" });
    
        })
    
    })
    // ===============================
}

function deleteProductById(req, res) {
    var pid = req.params.pid;
    // #8 Delete a product by ID (findByIdAndDelete)
    app.get('/products/delete/:id', function (req, res) {

        MongoClient.connect(url,options, function (err, db) {
            if (err) throw err;
            var dbo = db.db("fullstack");
            var myquery = { ID: pid };
            dbo.collection("products").deleteOne(myquery, function (err, obj) {
                if (err) throw err;
                console.log("Delete success! ");
                res.redirect("/products");
                db.close();
            });
        });
    });
    // ===============================
}

function addProduct(req, res) {
    var payload = req.body
    // #9 Add a new product 
    app.get('/productadd', function (req, res) {
        res.render('pages/productadd');
    });
    // ===============================
}

module.exports = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    addProduct: addProduct,
    updateProductById: updateProductById,
    deleteProductById, deleteProductById
};