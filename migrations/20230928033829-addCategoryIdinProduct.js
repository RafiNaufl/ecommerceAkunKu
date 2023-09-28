'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Products', 'CategoryId', {
      type: Sequelize.INTEGER
    })

  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Products', 'CategoryId', {})

  }
};
