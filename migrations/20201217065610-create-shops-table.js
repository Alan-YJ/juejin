'use strict';

//创建shops表
module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.createTable('shops',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        thumb_url: Sequelize.STRING,
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    }),

    down: async (queryInterface, Sequelize) => queryInterface.dropTable('shops')
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
};
