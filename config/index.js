const { env }  = process

module.exports = {
    port: env.PORT,
    jwtSecret: env.JWT_SECRET
}