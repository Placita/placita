const register = (Handlebars) => {
  const helpers = {
    formatDate: (date) => date.toLocaleDateString(),
    formatIngredients: (description) =>
      description.toString().replace(/[,]/g, ' | '),
    eq: (arg1, arg2) => arg1 === arg2,
    and: (arg1, arg2) => arg1 && arg2
  }

  if (Handlebars && typeof Handlebars.registerHelper === 'function') {
    for (const prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop])
    }
  } else {
    return helpers
  }
}

module.exports.register = register
module.exports.helpers = register(null)
