'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pizzas', [{
      name: 'Maxican',
      description: 'Description1',
      price: 22.2,
      img: 'default.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pizzas', null, {});
  }
};
