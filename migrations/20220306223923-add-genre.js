'use strict';

module.exports = {
  // add column genre to table movies 
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('movies', 'genre', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  // remove column genre from table movies  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('movies', 'genre');
  }
};
