"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class PfiRequestForm extends sequelize_1.Model {
}
exports.default = PfiRequestForm;
PfiRequestForm.init({
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
    contactPerson: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    mobile: {
        type: sequelize_1.DataTypes.STRING,
    },
    companyAddress: {
        type: sequelize_1.DataTypes.STRING,
    },
    emailAddress: {
        type: sequelize_1.DataTypes.STRING,
    },
    productBrand: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleModel: {
        type: sequelize_1.DataTypes.STRING,
    },
    bodyTypeDescription: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleServiceDetails: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleSpecialFitmentDetails: {
        type: sequelize_1.DataTypes.STRING,
    },
    costOfBodySpecialFitment: {
        type: sequelize_1.DataTypes.STRING,
    },
    quantity: {
        type: sequelize_1.DataTypes.STRING,
    },
    priceOfVehicle: {
        type: sequelize_1.DataTypes.STRING,
    },
    discount: {
        type: sequelize_1.DataTypes.STRING,
    },
    vatDeduction: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    whtDeduction: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    refundRebaseAmount: {
        type: sequelize_1.DataTypes.STRING,
    },
    refundRebaseRecipient: {
        type: sequelize_1.DataTypes.STRING,
    },
    registration: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    designation: {
        type: sequelize_1.DataTypes.STRING,
    },
    relationshipWithTransaction: {
        type: sequelize_1.DataTypes.STRING,
    },
    estimatedOrderClosingTime: {
        type: sequelize_1.DataTypes.STRING,
    },
    deliveryPeriod: {
        type: sequelize_1.DataTypes.STRING,
    },
    paymentType: {
        type: sequelize_1.DataTypes.STRING,
    },
    deliveryLocation: {
        type: sequelize_1.DataTypes.STRING,
    },
    additionalInformation: {
        type: sequelize_1.DataTypes.STRING,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'PfiRequestForm',
});
PfiRequestForm.sync({ force: true }).then(() => console.log("PfiRequestForm was successfully synced"));
//# sourceMappingURL=pfiRequestForm.model.js.map