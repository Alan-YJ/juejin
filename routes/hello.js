const { jwtHeaderDefine } = require('../utils/router-helper')

module.exports = [
    {
        method: 'GET',
        path:'/',
        handler: (req, h)=>{
            console.info('userid', req.auth.credentials)
            return `hapi`;
        },
        config:{
            tags:['api','tests'],
            description:"测试文档",
            // auth:false,
            validate:{
                ...jwtHeaderDefine
            }
        }
    }
]