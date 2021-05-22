// CRUD routes for menu items
const MenuItem = require('../models/menuItem')

// Render specific menu pages

exports.getMenus = (req, res) => {
  res.render('menus/menus')
}

exports.getBrunchMenu = (req, res) => {
  res.render('menus/brunch')
}

exports.getDinnerMenu = (req, res) => {
  res.render('menus/dinner')
}

exports.getDessertMenu = (req, res) => {
  res.render('menus/dessert')
}

exports.getDrinksMenu = (req, res) => {
  res.render('menus/drinks')
}

// C-U-D Routes for menu items
// TODO: restrict these routes to admins only

exports.newMenuItem = async (req, res) => {
  const newItem = new MenuItem(req.body)

  await newItem.save()
  req.flash('confirmMessage', 'Menu successfully updated.')
  res.redirect('/')
}
