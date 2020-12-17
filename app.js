require('env2')('./.env')
const Hapi = require("@hapi/hapi");
const config = require("./config")
const routes = require("./routes/index")
const pluginHapiSwagger = require("./plugins/hapi-swagger")

const server = Hapi.server(config)

const init = async ()=>{
    await server.register([
        ...pluginHapiSwagger
    ])
    server.route(routes),
    await server.start();
    console.info('server running')
}

init()