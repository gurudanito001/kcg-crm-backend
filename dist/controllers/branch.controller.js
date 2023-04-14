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
const branch_model_1 = __importDefault(require("../models/branch.model"));
class Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            try {
                let savedData = yield branch_model_1.default.create(data);
                return res.status(201).json({
                    message: "Branch Created Successfully",
                    status: "success",
                    statusCode: 201,
                    payload: savedData
                });
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allData = yield branch_model_1.default.findAll({
                    order: [['createdAt', 'DESC']]
                });
                return res.status(200).json({
                    message: "Branches Fetched Successfully",
                    status: "success",
                    statusCode: 200,
                    payload: allData
                });
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
                let oneData = yield branch_model_1.default.findByPk(id);
                if (!oneData) {
                    return res.status(404).json({ message: "Branch not found" });
                }
                return res.status(200).json({
                    message: "Branch Fetched Successfully",
                    status: "success",
                    statusCode: 200,
                    payload: oneData
                });
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    getAllByCompanyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let oneData = yield branch_model_1.default.findAll({
                    where: { companyId: id },
                    order: [['createdAt', 'DESC']]
                });
                if (!oneData) {
                    return res.status(404).json({ message: `Could not find branches with companyId` });
                }
                return res.status(200).json({
                    message: "Branches Fetched Successfully",
                    status: "success",
                    statusCode: 200,
                    payload: oneData
                });
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
                let updatedData = yield branch_model_1.default.update(data, {
                    where: { id: id }
                });
                return res.status(200).json({
                    message: "Branch updated successfully",
                    status: "success",
                    statusCode: 200,
                    payload: updatedData
                });
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
                let deletedData = yield branch_model_1.default.destroy({
                    where: { id: id }
                });
                return res.status(200).json({
                    message: "Branch deleted successfully",
                    status: "success",
                    statusCode: 200,
                    payload: deletedData
                });
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
}
const BranchController = new Controller();
exports.default = BranchController;
//# sourceMappingURL=branch.controller.js.map