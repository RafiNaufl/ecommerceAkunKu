const { Category, Product, User, Profile, ProductCategories } = require('../models');
const { Op } = require('sequelize')
const bcrypt = require('bcryptjs');
class Controller {

    static getLogin(req, res) {
        const {error} = req.query
        res.send('test login');
        // res.render('login', {error});
    }

    static postLogin(req, res) {
        const { username, password } = req.body;
        User.findOne({ where: { username } })
        .then(user => {
            if (user) {
                const isPasswordValid = bcrypt.compareSync(password, user.password)
                if (isPasswordValid) {
                    //case berhasil login
                    req.session.userId = user.id;
                    return res.redirect('/products');
                } else {
                    return res.redirect('/login');
                }
            } else {
                return res.redirect('/login');
            }
        })
        .catch((err) => { res.send(err) });
    }

    static getRegister(req, res) {
        res.send('test register');
        // res.render('register');
    }

    static postRegister(req, res) {
        const { username, email, password } = req.body;
        User.create({
            username: username,
            email: email,
            password: password,
            role: role
        })
            .then((user) => {
                res.redirect('/login');
            })
        // User.findOne({where : {email: email, username: username}})
        // .then((user) => {
        //     if (user) {
        //         throw new Error ('User already exists');
        //     }

        // })
    }

    static getProduct(req, res) {
        Product.findAll({include:Category})
            .then((products) => {
                res.render('index.ejs', { products });
        })
        .catch((err) => {
            res.send(err.message);
        });   
    }

    static getAddProduct(req, res) {
        res.render('addFormProduct.ejs');
    }
    
    static postAddProduct(req, res) {
        const { name, description, price, photo, stock, categoryId } = req.body;
    
        Product.create({
        name,
        description,
        price,
        photo,
        stock,
            })
            .then((product) => {
            if (categoryId && categoryId.length > 0) {
                product.addCategories(categoryId);
            }

            res.redirect('/');
        })
        .catch((err) => {
             res.send(err); 
         });
    }

    static getAddProduct(req, res) {
        res.send('test addProduct');
        // res.render('ini diganti jadi name file ejs form addProduct di view');
    }

    static postAddProduct(req, res) {
        const { name, description, price, photo, stock } = req.body;
        console.log(req.body);
        Product.create({
            name: name,
            description: description,
            price: price,
            photo: photo,
            stock: stock
        })
            .then((products) => {
                return products
            })
            .then((products) => {
                res.redirect('/products');
            })
            .catch((err) => { res.send(err) });
    }

    static getCategories(req, res) {
        Category.findAll()
            .then((categories) => {
                res.send(categories);
            })
    }

    static logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                res.send(err);
                return;
            }
            res.redirect('/login');
        })
    }

    
}



module.exports = Controller