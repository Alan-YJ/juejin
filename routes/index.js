const hello = require('./hello')
const orders = require('./orders')
const shops = require('./shops')
const users = require('./users')

module.exports = [...hello,
    ...orders,
    ...shops,
    ...users
]