'use strict';

//创建goods表
module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.createTable('goods',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        shop_id:{
            type: Sequelize.INTEGER,
            allowNull:false
        },
        thumb_url:Sequelize.STRING,
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    }),

    down: async (queryInterface, Sequelize) => queryInterface.dropTable('goods')
    
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
  
};
