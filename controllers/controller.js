const { Category, Product, User, Profile, ProductCategories } = require('../models');
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

    static getEditProduct(req, res) {
        const productId = req.params.id;
        Product.findByPk(productId)
          .then((product) => {
              res.render('editProduct', { product });
          })
          .catch((err) => {
            res.send(err); 
        });
      }

    static postEditProduct(req, res) {
        const productId = req.params.id;
        const updatedProductData = req.body;

        Product.findByPk(productId)
            .then((product) => {
                return product.update(updatedProductData);
            })
            .then(() => {
                res.redirect('/'); 
            })
            .catch((err) => {
                res.send(err); 
            });
    }
    
    static getDeleteProduct(req, res) {
        const productId = req.params.id;
    
        Product.findByPk(productId)
          .then((product) => {
              return product.destroy();
          })
          .then(() => {
            res.redirect('/'); 
          })
          .catch((err) => {
            res.send(err); 
          });
      }

    
}

module.exports = Controller