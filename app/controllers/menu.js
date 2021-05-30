// Routes for menu items
const MenuItem = require('../models/menuItem')

// Render specific menu pages

exports.getBrunchMenu = async (req, res) => {
  const brunchMenu = await MenuItem.find({ menu: 'BRUNCH' }).lean()
  res.render('menu', {
    menuTitle: 'Brunch',
    categories: ['ENTREE', 'SIDES'],
    menuItems: brunchMenu
  })
}

exports.getDinnerMenu = async (req, res) => {
  const dinnerMenu = await MenuItem.find({ menu: 'DINNER' }).lean()
  res.render('menu', {
    menuTitle: 'Dinner',
    categories: ['APPETIZERS', 'SALADS', 'TACOS', 'ENTREE', 'SIDES'],
    menuItems: dinnerMenu
  })
}

exports.getDessertMenu = async (req, res) => {
  const dessertMenu = await MenuItem.find({ menu: 'DESSERT' }).lean()
  res.render('menu', {
    menuTitle: 'Dessert',
    menuItems: dessertMenu
  })
}

exports.getDrinksMenu = async (req, res) => {
  const drinksMenu = await MenuItem.find({ menu: 'DRINKS' }).lean()
  res.render('menu', {
    menuTitle: 'Drinks',
    categories: ['BEERS', 'WINE', 'COCKTAILS'],
    menuItems: drinksMenu
  })
}
