const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');


router.get('/', Controller.getProduct);
router.get('/products/add', Controller.getAddProduct);
router.post('/products/add', Controller.postAddProduct);
router.get('/register', Controller.getRegister)
router.post('/register', Controller.postRegister);
router.get('/login', Controller.getLogin);
router.post('/login', Controller.postLogin);
router.get('/logout', Controller.logout)

router.use(function (req, res, next) {
    // console.log(req.session);
    if (!req.session.userId) {
        const err = 'You must be logged in to access'
        res.redirect(`/login?${err}`);
    } else {
        next();
    }
})

const role = function (req, res, next) {
    // console.log(req.session);
    if (req.session.role !== 'seller' && req.session.userId) {
        const err = 'You dont have permission to access'
        res.redirect(`/login?{err}`);
    } else {
        next();
    }
}
// router.get('/logout', Controller.getLogout);

// router.get('/profile', Controller.getProfile),
// router.post('/profile', Controller.postProfile),

router.get('/products', Controller.getProduct)
router.get('/products/add', Controller.getAddProduct)
router.post('/products/add', Controller.postAddProduct),

    // router.get('/categories', Controller.getCategories),

    // router.get('/products/edit/:id', role, Controller.getEditProduct);
    // router.post('/products/edit/:id', role, Controller.postEditProduct);
    // router.get('/products/delete/:id', role, Controller.getDeleteProduct);
    // router.get('products/buy/:id', Controller.getBuyProduct);
    // router.post('/products/buy/:id', Controller.postBuyProduct);

    // router.get('/categories/edit/:id', role, Controller.getEditCategory),
    // router.post('/categories/edit/:id', role, Controller.postEditCategory),
    // router.get('/categories/delete/:id', role, Controller.getDeleteCategory),

    module.exports = router;