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
    },
    stateId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    lgaId: {
        type: sequelize_1.DataTypes.UUID,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
});
Branch.sync({ force: true }).then(() => console.log("Branch was successfully synced"));
exports.default = Branch;
//# sourceMappingURL=branch.model.js.map