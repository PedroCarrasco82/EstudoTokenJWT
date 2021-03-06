'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('usuarios', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement : true,
              allowNull: false
          } ,
          name : Sequelize.STRING,
          email: Sequelize.STRING,
          password : Sequelize.STRING,
          birthday_date : Sequelize.DATE,
          created_at: Sequelize.DATE,
          updated_at: Sequelize.DATE,
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('usuarios');
  }
};
