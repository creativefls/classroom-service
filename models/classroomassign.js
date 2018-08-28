'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassroomAssign = sequelize.define('ClassroomAssign', {
    userId: DataTypes.STRING,
    classroomId: DataTypes.INTEGER,
    isAttend: DataTypes.BOOLEAN
  }, {});
  ClassroomAssign.associate = function(models) {
    // associations can be defined here
    ClassroomAssign.belongsTo(models.Classroom, { foreignKey: 'classroomId' })
  };
  return ClassroomAssign;
};
