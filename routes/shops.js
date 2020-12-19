const Joi = require("joi")
const models = require("../models")

const GROUP_NAME = 'shops'

module.exports = [
    {
        method:"GET",
        path: `/${GROUP_NAME}`,
        handler: async(request,h)=>{
            const result = await models.shops.findAll({
                attributes:['id','name']
            })
            return result
        },
        config:{
            tags:['api', GROUP_NAME],
            description: "获取店铺列表",
            validate:{
                query:Joi.object({
                    limit: Joi.number().integer().min(1).default(10).description("每页的条数"),
                    page: Joi.number().integer().min(1).default(1).description("页码数")
                })
            }
        }
    },
    {
        method:'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`,
        handler: async (request, h)=>{
            const { rows:results, count:totalCount } = await models.goods.findAndCountAll({
                where: {
                    shop_id: request.params.shopId,
                },
                attributes:[
                    'id', 'name'
                ],
                limit: request.params.limit | 10,
                offset: request.params.page * request.params.limit | 0
            })
            return {
                data:results,
                total:totalCount
            }
        },
        config:{
            tags:['api',GROUP_NAME],
            description:"获取店铺的商品列表",
            validate:{
                params: Joi.object({
                    shopId: Joi.string().required().error(new Error("店铺ID必填"))
                })
            }
        }
    }
]