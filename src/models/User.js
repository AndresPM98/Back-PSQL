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
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      role: {
        type: DataTypes.ENUM('Admin', 'User'),
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return User;
};