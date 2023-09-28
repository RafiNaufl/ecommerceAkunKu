'use strict';
const fs = require('fs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/categories.json', 'utf8')).map((el)=>{
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    });

    return queryInterface.bulkInsert('Categories', data, {});

  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});

  }
};
