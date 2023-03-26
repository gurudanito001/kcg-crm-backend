"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
var MarkettingActivity = dbConnection_1.default.define('MarkettingActivity', {
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
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "date is required" }
        }
    },
    participants: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
        allowNull: false,
        validate: {
            notEmpty: { msg: "participants are required" }
        }
    },
    location: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: { msg: "location is required" }
        }
    },
    objective: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: { msg: "objective is required" }
        }
    },
    targetResult: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: { msg: "targetResult is required" }
        }
    },
    briefReport: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: { msg: "briefReport is required" }
        }
    },
    pictures: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
        validate: {
            notEmpty: { msg: "pictures are required" },
        }
    },
    costIncurred: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "costIncurred is required" },
        }
    },
    pdfDetails: {
        type: sequelize_1.DataTypes.STRING,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
});
MarkettingActivity.sync().then(() => console.log("MarkettingActivity was successfully synced"));
exports.default = MarkettingActivity;
//# sourceMappingURL=markettingActivity.model.js.map