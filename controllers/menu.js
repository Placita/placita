// CRUD routes for menu items
const MenuItem = require('../models/menuItem')

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
