'use strict';

//添加列
module.exports = {
    up: async (queryInterface, Sequelize) => Promise.all([
        queryInterface.addColumn('shops','address',{ type: Sequelize.STRING})
    ])
    ,

    down: async (queryInterface, Sequelize) => Promise.all([
        queryInterface.removeColumn('shops','address')
    ])
};
