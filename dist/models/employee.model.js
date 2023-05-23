"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class Employee extends sequelize_1.Model {
}
exports.default = Employee;
Employee.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    companyId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: { msg: "companyId is required" },
        }
    },
    companyName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "companyName is required" },
        }
    },
    staffCadre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "staffCadre is required" },
        }
    },
    branchId: {
        type: sequelize_1.DataTypes.UUID,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "firstName is required" },
        }
    },
    middleName: {
        type: sequelize_1.DataTypes.STRING,
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
        allowNull: false,
        unique: true,
        validate: {
            isEmail: { msg: "email must be a valid email" },
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    supervisor: {
        type: sequelize_1.DataTypes.STRING,
    },
    productHead: {
        type: sequelize_1.DataTypes.STRING,
    },
    locationManager: {
        type: sequelize_1.DataTypes.STRING,
    },
    employmentDate: {
        type: sequelize_1.DataTypes.STRING,
    },
    brandsAssigned: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Employee',
});
Employee.sync().then(() => console.log("Employee was successfully synced"));
//# sourceMappingURL=employee.model.js.map