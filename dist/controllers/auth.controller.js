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
const sendEmail_1 = __importDefault(require("../services/sendEmail"));
const authServices_1 = require("../services/authServices");
const tokenService_1 = require("../services/tokenService");
const token_1 = require("../config/token");
const config_1 = __importDefault(require("../config/config"));
class Controller {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { email, password } = req.body;
            try {
                let user = yield employee_model_1.default.findOne({ where: { email } });
                if (!user) {
                    return res.status(400).json({ message: "Email or Password Invalid" });
                }
                let passwordMatched = yield (0, authServices_1.isPasswordMatch)(password, user.password);
                if (!passwordMatched) {
                    return res.status(400).json({ message: "Email or Password Invalid" });
                }
                let token = (0, tokenService_1.generateToken)({ userId: user.id, email, expires: config_1.default.JWT_ACCESS_EXPIRATION_MINUTES, type: token_1.tokenTypes.ACCESS, secret: config_1.default.SECRET, staffCadre: user.staffCadre });
                delete user.password;
                return res.status(201).json({
                    message: "Employee Login Successful",
                    status: "success",
                    statusCode: 200,
                    payload: { user, token }
                });
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    forgotPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { email } = req.body;
            try {
                let employee = yield employee_model_1.default.findOne({ where: { email } });
                if (!employee) {
                    return res.status(404).json({ message: 'Employee with email does not exist' });
                }
                let token = (0, tokenService_1.generateToken)({ userId: employee.id, email, expires: config_1.default.JWT_RESET_PASSWORD_EXPIRATION_MINUTES, type: token_1.tokenTypes.RESET_PASSWORD, secret: config_1.default.SECRET });
                yield (0, sendEmail_1.default)({ email, url: `${config_1.default.FRONTEND_URL}/resetPassword?token=${token}`, buttonText: "Reset Password" });
                return res.status(200).json({
                    message: "Reset Password Token!!!",
                    status: "success",
                    statusCode: 200,
                    payload: { employee, token }
                });
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    resetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { token, password } = req.body;
            try {
                let tokenData = (0, tokenService_1.decodeToken)(token);
                let { email, userId, type } = tokenData;
                if (type !== token_1.tokenTypes.RESET_PASSWORD) {
                    throw new Error("Invalid Token");
                }
                let employee = yield employee_model_1.default.findOne({ where: { email, id: userId } });
                if (!employee) {
                    return res.status(400).json({ message: "User not found" });
                }
                let hashedPassword = yield (0, authServices_1.hashPassword)(password);
                console.log(hashedPassword);
                let updatedEmployee = yield employee_model_1.default.update({ password: hashedPassword }, {
                    where: { email, id: userId }
                });
                return res.status(200).json({
                    message: "Reset Password Successful!!!",
                    status: "success",
                    statusCode: 200,
                    payload: updatedEmployee
                });
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
}
const AuthController = new Controller();
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map