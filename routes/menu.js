// Routing for all menu operations
const express = require('express')

const menuController = require('../controllers/menu')

const router = express.Router()

router.get('/brunch', menuController.getBrunchMenu)

router.get('/dinner', menuController.getDinnerMenu)

router.get('/dessert', menuController.getDessertMenu)

router.get('/drinks', menuController.getDrinksMenu)

module.exports = router
