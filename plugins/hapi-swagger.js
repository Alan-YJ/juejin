const inert = require('@hapi/inert')
const vision = require('@hapi/vision')
const package = require('package')
const hapiSwagger = require('hapi-swagger')

module.exports = [
    inert,
    vision,
    {
        plugin: hapiSwagger,
        options:{
            info:{
                title:"接口文档",
                version: package.version,
            },
            grouping:'tags',
            tags:[
                {
                    name:"tests",
                    description:"测试"
                }
            ]
        }
    }
]