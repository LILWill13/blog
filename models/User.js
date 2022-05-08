// requierments for using sequelize
const { Model, DataTypes } = require('sequelize');
// imports the bcrypt libary 
const bcrypt = require('bcrypt');
// imports the connection to the database
const sequelize = require('../config/connection');

class User extends Model {
  // checks that the password inputed is the password that is in the database
  checkPassword(loginPw) {
    // returns a boolean
    return bcrypt.compareSync(loginPw, this.password);
  };
}

// creats the blueprint for the user table
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      // encrypts a new or updated password
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
