"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class ContactPerson extends sequelize_1.Model {
}
exports.default = ContactPerson;
ContactPerson.init({
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
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: { msg: "customerId is required" },
        }
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "firstName is required" },
        }
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "lastName is required" },
        }
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    designation: {
        type: sequelize_1.DataTypes.STRING,
    },
    department: {
        type: sequelize_1.DataTypes.STRING,
    },
    phoneNumber1: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "phoneNumber1 is required" },
        }
    },
    phoneNumber2: {
        type: sequelize_1.DataTypes.STRING,
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'ContactPerson',
});
ContactPerson.sync().then(() => console.log("ContactPerson was successfully synced"));
//# sourceMappingURL=contactPerson.model.js.map