// Routes for menu items
const MenuItem = require('../models/menuItem')

// Render specific menu pages

exports.getBrunchMenu = async (req, res) => {
  const brunchMenu = await MenuItem.find({ menu: 'BRUNCH' }).lean()
  res.render('menu', {
    menuTitle: 'Brunch',
    menu: brunchMenu
  })
}

exports.getDinnerMenu = async (req, res) => {
  const dinnerMenu = await MenuItem.find({ menu: 'DINNER' }).lean()
  res.render('menu', {
    menuTitle: 'Dinner',
    menu: dinnerMenu
  })
}

exports.getDessertMenu = async (req, res) => {
  const dessertMenu = await MenuItem.find({ menu: 'DESSERT' }).lean()
  res.render('menu', {
    menuTitle: 'Dessert',
    menu: dessertMenu
  })
}

exports.getDrinksMenu = async (req, res) => {
  const drinksMenu = await MenuItem.find({ menu: 'DRINKS' }).lean()
  res.render('menu', {
    menuTitle: 'Drinks',
    menu: drinksMenu
  })
}
