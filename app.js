require('env2')('./.env')
const hapiAuthJWT2 = require('hapi-auth-jwt2')
const Hapi = require("@hapi/hapi");
const config = require("./config")
const routes = require("./routes/index")
const pluginHapiSwagger = require("./plugins/hapi-swagger")
const pluginAuthJWT2 = require("./plugins/hapi-auth-jwt2")

const server = Hapi.server(config)

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