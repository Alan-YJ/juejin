'use strict';

const timestamps = {
    create_at: new Date(),
    update_at: new Date()
}
module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('goods',[
      { id:1, name:'商品1',shop_id:1, thumb_url:'1.png', ...timestamps },
      { id:2, name:'商品2',shop_id:1, thumb_url:'2.png', ...timestamps },
      { id:3, name:'商品3',shop_id:1, thumb_url:'3.png', ...timestamps },
      { id:4, name:'商品4',shop_id:1, thumb_url:'4.png', ...timestamps },
      { id:5, name:'商品5',shop_id:2, thumb_url:'5.png', ...timestamps },
      { id:6, name:'商品6',shop_id:2, thumb_url:'6.png', ...timestamps },
      { id:7, name:'商品7',shop_id:3, thumb_url:'7.png', ...timestamps },
      { id:8, name:'商品8',shop_id:4, thumb_url:'8.png', ...timestamps },
    ],
    {}
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
    ),

    down: async (queryInterface, Sequelize) => {
        const { Op } = Sequelize
        return queryInterface.bulkDelete('goods', {
            id:{ [Op.in]:[1,2,3,4,5,6,7,8] }
        },{})
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
