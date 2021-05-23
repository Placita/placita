const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('@admin-bro/express')
const bcrypt = require('bcrypt')

// Import resources to pass to our AdminBro instance
const Admin = require('../models/admin')
const MenuItem = require('../models/menuItem')
const Happenings = require('../models/happening')

// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require('@admin-bro/mongoose'))

// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  resources: [
    {
      resource: Admin,
      options: {
        properties: {
          encryptedPassword: {
            isVisible: false
          },
          password: {
            type: 'string',
            isVisible: {
              list: false,
              edit: true,
              filter: false,
              show: false
            }
          }
        },
        actions: {
          new: {
            isAccessible: ({ currentAdmin }) =>
              currentAdmin && currentAdmin.role === 'admin',
            before: async (request) => {
              if (request.payload.password) {
                request.payload = {
                  ...request.payload,
                  encryptedPassword: await bcrypt.hash(
                    request.payload.password,
                    10
                  ),
                  password: undefined
                }
              }
              return request
            }
          },
          edit: {
            isAccessible: ({ currentAdmin }) =>
              currentAdmin && currentAdmin.role === 'admin'
          },
          delete: {
            isAccessible: ({ currentAdmin }) =>
              currentAdmin && currentAdmin.role === 'admin'
          }
        }
      }
    },
    MenuItem,
    Happenings
  ],
  rootPath: '/admin'
})

// Build and use a router which will handle all AdminBro routes
// Build and use a router which will handle all AdminBro routes
const adminRouter = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const admin = await Admin.findOne({ email })
    if (admin) {
      const matched = await bcrypt.compare(password, admin.encryptedPassword)
      if (matched) {
        return admin
      }
    }
    return false
  },
  cookiePassword: process.env.SECRET_KEY
})

module.exports = {
  adminBro,
  adminRouter
}
