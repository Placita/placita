const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('@admin-bro/express')
const bcrypt = require('bcrypt')

// Import resources to pass to our AdminBro instance
const Admin = require('../models/admin')
const Menu = require('../models/menu')
const MenuItem = require('../models/menuItem')
const Happening = require('../models/happening')
const Hours = require('../models/hours')

// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require('@admin-bro/mongoose'))

// Declare const salt
const salt = parseInt(process.env.SALT)

// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  rootPath: '/admin',
  branding: {
    logo: '/images/logo-banner.png',
    companyName: 'Placita',
    softwareBrothers: false
  },
  resources: [{
    resource: Admin,
    options: {
      navigation: {
        name: null,
        icon: 'User'
      },
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
        },
        _id: {
          isVisible: false
        }
      },
      actions: {
        new: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin',
          before: async (request) => {
            if (request.payload.password) {
              request.payload = {
                ...request.payload,
                encryptedPassword: await bcrypt.hash(
                  request.payload.password,
                  salt
                ),
                password: undefined
              }
            }
            return request
          }
        },
        edit: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        },
        delete: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        },
        bulkDelete: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        }
      }
    }
  },
  {
    resource: MenuItem,
    options: {
      navigation: {
        name: null,
        icon: 'Restaurant'
      },
      properties: {
        _id: {
          isVisible: false
        },
        name: {
          isTitle: true
        },
        updatedBy: {
          isRequired: false,
          isVisible: {
            list: true,
            edit: false,
            filter: true,
            show: true
          }
        },
        createdAt: {
          isRequired: false,
          isVisible: {
            list: true,
            edit: false,
            filter: false,
            show: true
          }
        },
        updatedAt: {
          isRequired: false,
          isVisible: {
            list: true,
            edit: false,
            filter: false,
            show: true
          }
        }
      },
      actions: {
        // reorder: {
        //   isAccessible: true,
        //   type: 'resource',
        //   icon: 'Shuffle',
        //   handler: async (req, res, context) => {
        //     console.log(req)
        //     console.log(res)
        //     console.log(context)
        //   }
        // },
        moveUp: {
          type: 'record',
          icon: 'ArrowUp',
          handler: async (req, res, data) => {
            console.log(req)
            console.log(res)
            console.log(data)
          }
        },
        moveDown: {
          type: 'record',
          icon: 'ArrowDown',
          handler: async (req, res, data) => {

          }
        },
        new: {
          isAccessible: true,
          before: async (request) => {
            request.payload.updatedBy = request.session.adminUser._id
            return request
          }
        },
        edit: {
          isAccessible: true,
          before: async (request) => {
            request.payload.updatedBy = request.session.adminUser._id
            return request
          }
        },
        delete: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        },
        bulkDelete: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        }
      }
    }
  },
  {
    resource: Hours,
    options: {
      navigation: {
        name: null,
        icon: 'Time'
      },
      properties: {
        _id: {
          isVisible: false
        }
      },
      actions: {
        new: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        },
        edit: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        },
        delete: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        },
        bulkDelete: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        }
      }
    }
  },
  {
    resource: Menu,
    options: {
      navigation: {
        name: null,
        icon: 'Restaurant'
      },
      properties: {
        _id: {
          isVisible: false
        },
        author: {
          isVisible: {
            list: true,
            edit: false,
            filter: true,
            show: true
          }
        },
        createdAt: {
          isVisible: {
            list: true,
            edit: false,
            filter: false,
            show: true
          }
        },
        updatedAt: {
          isVisible: {
            list: true,
            edit: false,
            filter: false,
            show: true
          }
        }
      },
      actions: {
        new: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        },
        edit: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        },
        delete: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        },
        bulkDelete: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        }
      }
    }
  },
  {
    resource: Happening,
    options: {
      navigation: {
        name: null,
        icon: 'EventSchedule'
      },
      properties: {
        _id: {
          isVisible: false
        },
        name: {
          isTitle: true
        },
        updatedBy: {
          isRequired: false,
          isVisible: {
            list: true,
            edit: false,
            filter: true,
            show: true
          }
        },
        createdAt: {
          isRequired: false,
          isVisible: {
            list: true,
            edit: false,
            filter: false,
            show: true
          }
        },
        updatedAt: {
          isRequired: false,
          isVisible: {
            list: true,
            edit: false,
            filter: false,
            show: true
          }
        }
      },
      actions: {
        new: {
          isAccessible: true,
          before: async (request) => {
            request.payload.updatedBy = request.session.adminUser._id
            return request
          }
        },
        edit: {
          isAccessible: true,
          before: async (request) => {
            request.payload.updatedBy = request.session.adminUser._id
            return request
          }
        },
        delete: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        },
        bulkDelete: {
          isAccessible: ({
            currentAdmin
          }) =>
            currentAdmin && currentAdmin.role === 'admin'
        }
      }
    }
  }
  ],
  dashboard: {
    component: AdminBro.bundle('../components/dashboard.jsx')
  }
})

// Build and use a router which will handle all AdminBro routes
const adminRouter = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const admin = await Admin.findOne({
      email
    })
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
