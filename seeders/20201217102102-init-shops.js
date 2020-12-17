'use strict';

const timestamps = {
    create_at: new Date(),
    update_at: new Date()
}
module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('shops',[
        { id:1, name:'店铺1', thumb_url:'1.png', ...timestamps },
        { id:2, name:'店铺2', thumb_url:'2.png', ...timestamps },
        { id:3, name:'店铺3', thumb_url:'3.png', ...timestamps },
        { id:4, name:'店铺4', thumb_url:'4.png', ...timestamps },
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
        return queryInterface.bulkDelete('shops', {
            id:{ [Op.in]:[1,2,3,4] }
        },{})
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
