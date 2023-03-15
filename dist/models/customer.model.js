"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
const contactPerson_model_1 = __importDefault(require("./contactPerson.model"));
class Customer extends sequelize_1.Model {
}
exports.default = Customer;
Customer.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    companyName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
    },
    lga: {
        type: sequelize_1.DataTypes.STRING,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    address1: {
        type: sequelize_1.DataTypes.STRING,
    },
    address2: {
        type: sequelize_1.DataTypes.STRING,
    },
    companyWebsite: {
        type: sequelize_1.DataTypes.STRING,
    },
    chairman: {
        type: sequelize_1.DataTypes.STRING,
    },
    mdCeoName: {
        type: sequelize_1.DataTypes.STRING,
    },
    industry: {
        type: sequelize_1.DataTypes.STRING,
    },
    businessType: {
        type: sequelize_1.DataTypes.STRING,
    },
    customerType: {
        type: sequelize_1.DataTypes.STRING,
    },
    enquirySource: {
        type: sequelize_1.DataTypes.STRING,
    },
    contactPersons: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON)
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Customer',
});
Customer.hasMany(contactPerson_model_1.default);
Customer.sync().then(() => console.log("Customer was successfully synced"));
//# sourceMappingURL=customer.model.js.map