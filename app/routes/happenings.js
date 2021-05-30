// Routing for happenings
const express = require('express')

const happeningsController = require('../controllers/happenings')

const router = express.Router()

router.get('/', happeningsController.getHappenings)

module.exports = router
