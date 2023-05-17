"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class InvoiceRequestForm extends sequelize_1.Model {
}
exports.default = InvoiceRequestForm;
InvoiceRequestForm.init({
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
    },
    customerType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    pfiRequestFormId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    invoiceName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    address1: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    address2: {
        type: sequelize_1.DataTypes.STRING,
    },
    contactPerson: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    contactOfficeTelephone: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    salesThru: {
        type: sequelize_1.DataTypes.STRING,
    },
    industry: {
        type: sequelize_1.DataTypes.STRING,
    },
    businessType: {
        type: sequelize_1.DataTypes.STRING,
    },
    kycId: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehiclesData: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
        defaultValue: []
    },
    expectedDeliveryDate: {
        type: sequelize_1.DataTypes.STRING,
    },
    deliveryLocation: {
        type: sequelize_1.DataTypes.STRING,
    },
    deliveryBy: {
        type: sequelize_1.DataTypes.STRING,
    },
    paymentStatus: {
        type: sequelize_1.DataTypes.STRING,
    },
    lpoNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    lpoPdf: {
        type: sequelize_1.DataTypes.STRING,
    },
    agreedCreditPeriod: {
        type: sequelize_1.DataTypes.STRING,
    },
    rebateReceiver: {
        type: sequelize_1.DataTypes.STRING,
    },
    relationshipWithTransaction: {
        type: sequelize_1.DataTypes.STRING,
    },
    accountDetailsToTransfer: {
        type: sequelize_1.DataTypes.STRING,
    },
    refundToCustomer: {
        type: sequelize_1.DataTypes.STRING,
    },
    approved: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    warrantyCertificate: {
        type: sequelize_1.DataTypes.STRING
    },
    approvedByGM: {
        type: sequelize_1.DataTypes.JSON,
        defaultValue: false
    },
    additionalInformation: {
        type: sequelize_1.DataTypes.TEXT,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'InvoiceRequestForm',
});
InvoiceRequestForm.sync({ force: true }).then(() => console.log("InvoiceRequestForm was successfully synced"));
//# sourceMappingURL=invoiceRequestForm.model.js.map