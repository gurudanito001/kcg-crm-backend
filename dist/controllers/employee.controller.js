"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_model_1 = __importDefault(require("../models/employee.model"));
const authServices_1 = require("../services/authServices");
class Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            try {
                let hashedPassword = yield (0, authServices_1.hashPassword)(data.password);
                let newData = Object.assign(Object.assign({}, data), { password: hashedPassword });
                let savedData = yield employee_model_1.default.create(newData);
                if (savedData) {
                    return res.status(201).json({
                        message: "Employee Created Successfully",
                        status: "success",
                        statusCode: 201,
                        payload: savedData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            try {
                let allData = yield employee_model_1.default.findAll();
                if (allData) {
                    return res.status(200).json({
                        message: "Employee Fetched Successfully",
                        status: "success",
                        statusCode: 200,
                        payload: allData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let oneData = yield employee_model_1.default.findByPk(id);
                let { supervisor, productHead, locationManager, subordinate } = oneData;
                if (supervisor) {
                    supervisor = yield employee_model_1.default.findByPk(supervisor);
                    oneData.supervisor = { id: supervisor.id, fullName: `${supervisor.firstName} ${supervisor.middleName} ${supervisor.lastName}` };
                }
                if (productHead) {
                    productHead = yield employee_model_1.default.findByPk(productHead);
                    oneData.productHead = { id: productHead.id, fullName: `${productHead.firstName} ${productHead.middleName} ${productHead.lastName}` };
                }
                if (locationManager) {
                    locationManager = yield employee_model_1.default.findByPk(locationManager);
                    oneData.locationManager = { id: locationManager.id, fullName: `${locationManager.firstName} ${locationManager.middleName} ${locationManager.lastName}` };
                }
                if (oneData) {
                    return res.status(200).json({
                        message: "Employee Fetched Successfully",
                        status: "success",
                        statusCode: 200,
                        payload: oneData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let data = req.body;
            try {
                let updatedData = yield employee_model_1.default.update(data, {
                    where: { id }
                });
                if (updatedData) {
                    return res.status(200).json({
                        message: "Employee updated successfully",
                        status: "success",
                        statusCode: 200,
                        payload: updatedData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let deletedData = yield employee_model_1.default.destroy({
                    where: { id: id }
                });
                if (deletedData) {
                    return res.status(200).json({
                        message: "Employee deleted successfully",
                        status: "success",
                        statusCode: 200,
                        payload: deletedData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
}
const EmployeeController = new Controller();
exports.default = EmployeeController;
//# sourceMappingURL=employee.controller.js.map