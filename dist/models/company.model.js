"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
var Company = dbConnection_1.default.define('Company', {
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    group: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "group is required" }
        }
    },
    code: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        validate: {
            notEmpty: { msg: "code is required" }
        }
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: "name is required" }
        }
    },
    logo: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: "email is required" },
            isEmail: { msg: "email must be a valid email" }
        }
    },
    brands: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
});
Company.sync().then(() => console.log("Company was successfully synced"));
exports.default = Company;
//# sourceMappingURL=company.model.js.map