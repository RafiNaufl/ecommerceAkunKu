const { Category, Product, User, Profile } = require('../models/index');
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
            res.send(products);
        })
        .catch((err) => {res.send(err)});
    }
}



module.exports = Controller