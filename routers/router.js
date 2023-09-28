const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('TESTCAsExample')
})



module.exports =router