
const JWT = require("jsonwebtoken")

const GROUP_NAME = "users"

module.exports = [{
    method:"POST",
    path:`/${GROUP_NAME}/createJWT`,
    handler: async (request, h)=>{
        const generateJWT = (jwtInfo)=>{
            const payload = {
                userId: jwtInfo.userId,
                exp: Math.floor(new Date().getTime() / 1000) + 7 *24 *60 *60
            }
            return JWT.sign(payload, process.env.JWT_SECRET)
        }

        return h.response(generateJWT({
            userId:1
        }))
    },
    config:{
        tags:['api', GROUP_NAME],
        description:'测试JWT',
        auth:false
    }
}]