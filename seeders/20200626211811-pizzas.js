'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pizzas', [{
      name: 'Mexicana',
      description: 'Tomato sauce, gouda сheese, chicken fillet, red onion, spinach, jalapeno pepper, pepperoni',
      price: 44,
      img: 'mexicana.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Vegeterian',
      description: 'Tomato sauce, gouda cheese, spinach, red onion, bell pepper, tomatoes, mushrooms',
      price: 7,
      img: 'vegeterian.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Classico',
      description: 'Tomato sauce, gouda cheese, salami, mushrooms, pepperoni pepper',
      price: 8,
      img: 'classico.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chicken stripes',
      description: 'Barbecue sauce, gouda cheese, chicken nuggets, corn, bell pepper',
      price: 5,
      img: 'chicken_stripes.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Frutti di Mare',
      description: 'Tomato sauce, gouda cheese, mix seafood, red onion, tomato',
      price: 25,
      img: 'frutti_de_mare.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Salami',
      description: 'Tomato sauce, gouda cheese, salami',
      price: 16,
      img: 'frutti_de_mare.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Quattro Formaggi',
      description: 'Tomato sauce, gouda cheese, mozzarella cheese, cheddar cheese, parmesan cheese',
      price: 35,
      img: 'quatto.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Volcano',
      description: 'Tomato sauce, gouda cheese, spinach, red onion, bell pepper, tomatoes, mushrooms, chicken fillet, olives',
      price: 21,
      img: 'volcano.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },


    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pizzas', null, {});
  }
};
