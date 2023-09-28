
const express = require('express');
const Controller = require('../controllers/controller');
const router = express.Router();


router.get('/')
router.get('/login', Controller.getLogin);
router.post('/login', Controller.postLogin);
router.get('/register', Controller.getRegister)
router.post('/register', Controller.postRegister);
router.get('/logout', Controller.getLogout);

router.get('/profile', Controller.getProfile);
router.post('/profile', Controller.postProfile);

router.get('/products', Controller.getProduct);
router.get('/products/add', Controller.getAddProduct);
router.post('/products/add', Controller.postAddProduct);

router.get('/categories', Controller.getCategories);

router.get('/products/edit/:id', Controller.getEditProduct);
router.post('/products/edit/:id', Controller.postEditProduct);
router.get('/products/delete/:id', Controller.getDeleteProduct);
router.get('products/buy/:id', Controller.getBuyProduct);
router.post('/products/buy/:id', Controller.postBuyProduct);

router.get('/categories/edit/:id', Controller.getEditCategory);
router.post('/categories/edit/:id', Controller.postEditCategory);
router.get('/categories/delete/:id', Controller.getDeleteCategory);

module.exports = router;

