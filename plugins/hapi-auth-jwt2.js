const config = require('../config')

const validate = (decoded, request, h)=>{
    let error;
    const { userId } = decoded
    
    console.info('validate', decoded)
    if(!userId){
        return h.response(error,false, userId)
    }
    const credentials = {
        userId
    }

    return h.response(error, true, credentials)
}

module.exports = (server)=>{
    server.auth.strategy('jwt','jwt',{
        key: config.jwtSecret,
        // validateFunc: validate,
        validate
    });
    server.auth.default('jwt');
}