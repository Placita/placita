const express = require('express')

const visitController = require('../controllers/visit')

const router = express.Router()

router.get('/', visitController.getVisit)

module.exports = router
