const Hours = require('../models/hours')

exports.getVisit = async (req, res) => {
  const hours = await Hours.find().lean()
  res.render('visit', { hours: hours })
}
