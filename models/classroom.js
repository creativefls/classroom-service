'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define('Classroom', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    timeBegin: DataTypes.DATE,
    timeEnd: DataTypes.DATE,
    isClosed: DataTypes.BOOLEAN,
    materialUrl: DataTypes.STRING,
    additionalName: DataTypes.STRING,
    quota: DataTypes.INTEGER,
    classEventId: DataTypes.INTEGER
  }, {});
  Classroom.associate = function(models) {
    Classroom.belongsTo(models.ClassEvent, { foreignKey: 'classEventId' })
    Classroom.hasMany(models.ClassroomAssign, { foreignKey: 'classroomId' })
  };
  return Classroom;
};
