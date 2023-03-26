"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class Product extends sequelize_1.Model {
}
exports.default = Product;
Product.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "name is required" }
        }
    },
    code: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    productGroupId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: { msg: "productGroupId is required" }
        }
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    unitOfMeasurement: {
        type: sequelize_1.DataTypes.STRING,
    },
    specifications: {
        type: sequelize_1.DataTypes.STRING,
    },
    brochures: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    images: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "price is required" }
        }
    },
    vatInclusive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    vatRate: {
        type: sequelize_1.DataTypes.STRING,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Product',
});
Product.sync().then(() => console.log("Product was successfully synced"));
//# sourceMappingURL=product.model.js.map