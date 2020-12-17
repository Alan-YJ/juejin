module.exports = [
    {
        method: 'GET',
        path:'/',
        handler: (req, h)=>{
            return `hapi`;
        },
        config:{
            tags:['api','tests'],
            description:"测试文档"
        }
    }
]