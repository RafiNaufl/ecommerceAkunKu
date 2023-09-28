const { Category, Product, User, Profile } = require('../models');
const { Op } = require('sequelize')
class Controller {

    static getLogin(req, res) {
        res.render('login');
    }

    static postLogin(req, res) {
        const { email, password } = req.body;
        User.findByEmail(email)
        .then((user) => {
            res.send(user);
        })
    }

    static getProduct(req, res) {
        Product.findAll()
        .then((products) => {
            res.render('index.ejs', { products });
        })
        .catch((err) => {
            res.send(err);
        });   
    }

    static getAddProduct(req, res) {
        res.render('addFormProduct.ejs');
    }
    
    static postAddProduct(req, res) {
        const { name, description, price, photo, stock } = req.body;
    
        Product.create({
        name,
        description,
        price,
        photo,
        stock,
        })
        .then((product) => {
            res.redirect('/');
        })
        .catch((err) => {
            res.send(err); 
        });
    }
    
}



module.exports = Controller