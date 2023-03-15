const { tokenTypes } = require('../config/tokens');
import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";
import Interfaces from 'src/interfaces';

export default class Token extends Model { }

Token.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  token: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  expires: {
    type: DataTypes.DATE,
  },
  type: {
    type: DataTypes.STRING,
    validate: {
      isIn: [Object.values(tokenTypes)],
    },
  },
  blacklisted: {
    type: DataTypes.BOOLEAN,
  },
}, {
  sequelize,
  modelName: 'Token',
});

Token.sync().then(() => console.log("Token was successfully synced"));


