const Joi = require("joi")

const GROUP_NAME = 'orders'

module.exports = [
    {
        method:"POST",
        path: `/${GROUP_NAME}`,
        handler: async(request,h)=>{
            return ``
        },
        config:{
            tags:['api', GROUP_NAME],
            description: "创建订单",
            validate:{
                payload:Joi.object({
                    goodsList: Joi.array().items(
                        Joi.object().keys({
                            goods_id: Joi.number().integer(),
                            count:Joi.number().integer()
                        })
                    )
                }),
                headers: Joi.object({
                    authorization: Joi.string().required(),
                }).unknown()
            }
        }
    },
    {
        method:'POST',
        path: `/${GROUP_NAME}/{orderId}/pay`,
        handler: async (request, h)=>{
            return ``
        },
        config:{
            tags:['api',GROUP_NAME],
            description:"订单支付",
            validate:{
                params:Joi.object({
                    orderId: Joi.string().required().error(new Error("订单id必填"))
                })
            }
        }
    }
]