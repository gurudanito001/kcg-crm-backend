import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class ProductGroup extends Model { }

  ProductGroup.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { 
        notEmpty: { msg: "name is required" }
      }
    },
    code: {
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'ProductGroup',
  });

  ProductGroup.sync().then(()=>console.log("ProductGroup was successfully synced"));

