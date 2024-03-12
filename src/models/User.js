const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      rol: {
        type: DataTypes.ENUM('Admin', 'User'),
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return User;
};