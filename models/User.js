const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { hashPassword } = require("../hooks/hashPassword");

require("dotenv").config();

class User extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isAlphanumeric: true },
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true },
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8]
    },
  },
};

const options = {
  hooks: {
    beforeCreate: hashPassword,
    beforeUpdate: hashPassword,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "user",
};

User.init(schema, options);

module.exports = User;
