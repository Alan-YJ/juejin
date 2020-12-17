const hello = require('./hello')
const orders = require('./orders')
const shops = require('./shops')

module.exports = [...hello,
    ...orders,
    ...shops
]