const { Category, Product, User, Profile } = require('../models/index');
class Controller {

    static getLogin(req, res) {
        res.send('test login');
        // res.render('login');
    }

    static postLogin(req, res) {
        const { email, password } = req.body;
        User.findByEmail(email)
        .then((user) => {
            res.send(user);
        })
    }

    static getRegister(req, res) {
        res.send('test register');
        // res.render('register');
    }

    static postRegister(req, res) {
        const { username, email, password } = req.body;
        User.findOne({where : {email: email, username: username}})
        .then((user) => {
            if (user) {
                throw new Error ('User already exists');
            }
            return User.create({
                username: username,
                email: email,
                password: password
            })
        })
    }

    static getProduct(req, res) {
        Product.findAll()
        .then((products) => {
            res.send(products);
        })
        .catch((err) => {res.send(err)});
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
        .then((products)=>{
            res.redirect('/products');
        })
        .catch((err) => {res.send(err)});
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