// Routing for basic web pages
const express = require('express')

const mainController = require('../controllers/main')

const router = express.Router()

router.get('/', mainController.getIndex)

router.get('/visit', mainController.getVisit)

router.get('/story', mainController.getStory)

module.exports = router
