'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassEvent = sequelize.define('ClassEvent', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    openReg: DataTypes.DATE,
    closeReg: DataTypes.DATE,
    scope: DataTypes.STRING,
    classType: DataTypes.STRING
  }, {});
  ClassEvent.associate = function(models) {
    // associations can be defined here
  };
  return ClassEvent;
};
