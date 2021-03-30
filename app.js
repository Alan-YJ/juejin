const hapiAuthJWT2 = require('hapi-auth-jwt2')
require('env2')('./.env')
const Hapi = require("@hapi/hapi");
const config = require("./config")
const routes = require("./routes/index")
const pluginHapiSwagger = require("./plugins/hapi-swagger")
const pluginAuthJWT2 = require("./plugins/hapi-auth-jwt2")

const server = Hapi.server({
    port: config.port,
    host: config.host
})

const init = async ()=>{
    await server.register([
        ...pluginHapiSwagger,
        hapiAuthJWT2
    ])
    pluginAuthJWT2(server)
    server.route(routes),
    await server.start();
    console.info('server running')
    return server
}

init()