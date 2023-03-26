"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
const Branch = dbConnection_1.default.define('Branch', {
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
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "state is required" },
        }
    },
    lga: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "lga is required" },
        }
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "name is required" },
        }
    },
    code: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        validate: {
            notEmpty: { msg: "code is required" },
        }
    },
    isHeadOffice: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "address is required" },
        }
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
});
Branch.sync().then(() => console.log("Branch was successfully synced"));
exports.default = Branch;
//# sourceMappingURL=branch.model.js.map