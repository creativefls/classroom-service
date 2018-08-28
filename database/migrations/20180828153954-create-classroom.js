'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Classrooms', {
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
      timeBegin: {
        type: Sequelize.DATE
      },
      timeEnd: {
        type: Sequelize.DATE
      },
      isClosed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      materialUrl: {
        type: Sequelize.STRING
      },
      additionalName: {
        type: Sequelize.STRING
      },
      quota: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      classEventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ClassEvents',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    return queryInterface.dropTable('Classrooms');
  }
};
