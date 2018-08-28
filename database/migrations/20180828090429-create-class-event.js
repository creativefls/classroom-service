'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClassEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      quota: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      openReg: {
        type: Sequelize.DATE
      },
      closeReg: {
        type: Sequelize.DATE
      },
      isClosed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      scope: {
        type: Sequelize.STRING,
        defaultValue: 'general'
      },
      classType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ClassEvents');
  }
};
