"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
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
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: { msg: "employeeId is required" },
        }
    },
    companyName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "companyName is required" },
        }
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
        allowNull: false,
        validate: {
            notEmpty: { msg: "address is required" },
        }
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
    status: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "cold"
    },
    approved: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Customer',
});
Customer.sync().then(() => console.log("Customer was successfully synced"));
//# sourceMappingURL=customer.model.js.map