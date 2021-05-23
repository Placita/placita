// Routes for menu items
const MenuItem = require('../models/menuItem')

// Render specific menu pages

exports.getMenus = (req, res) => {
  res.render('menus/menus')
}

exports.getBrunchMenu = async (req, res) => {
  const brunchMenu = await MenuItem.find({ menu: 'BRUNCH' }).lean()
  res.render('menus/brunch', {
    menu: brunchMenu
  })
}

exports.getDinnerMenu = async (req, res) => {
  const dinnerMenu = await MenuItem.find({ menu: 'DINNER' }).lean()
  res.render('menus/dinner', {
    menu: dinnerMenu
  })
}

exports.getDessertMenu = async (req, res) => {
  const dessertMenu = await MenuItem.find({ menu: 'DESSERT' }).lean()
  res.render('menus/dessert', {
    menu: dessertMenu
  })
}

exports.getDrinksMenu = async (req, res) => {
  const drinksMenu = await MenuItem.find({ menu: 'DRINKS' }).lean()
  res.render('menus/drinks', {
    menu: drinksMenu
  })
}
