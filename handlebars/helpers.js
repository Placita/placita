const register = (Handlebars) => {
  const helpers = {
    formatDate: (date) => date.toLocaleDateString()
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
