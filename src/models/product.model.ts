import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class Product extends Model { }

  Product.init({
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      unique: true
    },
    productGroupId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    unitOfMeasurement: {
      type: DataTypes.STRING,
    },
    specifications: {
      type: DataTypes.STRING,
    },
    brochures: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    price: {
      type: DataTypes.STRING,
    },
    vatInclusive: {
      type: DataTypes.BOOLEAN,
    },
    vatRate: {
      type: DataTypes.STRING,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'Product',
  });

  Product.sync({force: true}).then(()=>console.log("Product was successfully synced"));

