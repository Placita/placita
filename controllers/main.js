// Routes for all basic web pages that only need to return templates

exports.getIndex = (req, res) => {
  res.render('home')
}
