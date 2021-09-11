const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    getProductById
} = require("../controller/productControllers");

router.get('/',getAllProducts); // get all products from database
router.get('/:id', getProductById); // get selected product from the database


module.exports = router;