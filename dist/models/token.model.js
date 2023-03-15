"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { tokenTypes } = require('../config/tokens');
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class Token extends sequelize_1.Model {
}
exports.default = Token;
Token.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    token: {
        type: sequelize_1.DataTypes.STRING,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    expires: {
        type: sequelize_1.DataTypes.DATE,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isIn: [Object.values(tokenTypes)],
        },
    },
    blacklisted: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Token',
});
Token.sync().then(() => console.log("Token was successfully synced"));
//# sourceMappingURL=token.model.js.map