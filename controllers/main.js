// Routes for all basic web pages that only need to return templates

exports.getIndex = (req, res) => {
  res.render('home')
}

exports.getStory = (req, res) => {
  res.render('story')
}

exports.getVisit = (req, res) => {
  res.render('visit')
}
