const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// creates user model
class User extends Model {
  // runs per instance
  checkPassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password);
  }
}

// define columns
User.init(
  {
    // define id column
    id: {
      // sort datatypes
      type: DataTypes.INTEGER,
      // not null
      allowNull: false,
      // primary key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    // username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // min of password length 
        len: [4],
      },
    },
  },
  {
    hooks: {
      
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
  

    // passes sequelize connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
