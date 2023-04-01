const express = require('express')
const router = express.Router();
const bookController = require('../controllers/book_controllers')

router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.get('/getBook',bookController.getAllBooks)
router.get('/postBook',bookController.postBook)

module.exports = router