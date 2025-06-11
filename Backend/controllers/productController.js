const Product = require('../models/Product');

exports.createProduct = async (req,res) => {
    const {name, price,quantity} = req.body;

    try {
        const product = new Product ({name, price, quantity});
        await product.save();
        res.status(201).json(product);

    } catch (error) {
        res.status(500).json({error: error.massage});
    }
};

exports.getProducts = async(req,res) => {
    try {
        const products = await Product.find();
        res.status(200).jsoon(products);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProductById = async(req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404) .json ({error: 'Not found'});
        res.json(product);
    } catch (error) {
        res.status(500).json({error:err.massage});

    }
};

exports.updateProduct = async(req,res) => {
    try{
    const product = await Product .findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(!product) return res.status(404).json ({error: 'Not found'});
    res.json(product);
    }catch(err) {
        res.status(500).json({error:err.massage});

    }
};


exports.deleteProduct =async(req,res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) return res.status(404).json ({error: 'Not found'});
        res.json({msg: 'Product Deleted'});

    } catch (error) {
        res.status(500) .json ({error:err.massage});
    }
};