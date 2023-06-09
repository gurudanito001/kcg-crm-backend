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
exports.generateRandomString = exports.isPasswordMatch = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
function hashPassword(password, salt = 8) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcrypt_1.default.hash(password, salt);
    });
}
exports.hashPassword = hashPassword;
;
function isPasswordMatch(providePassword, userPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcrypt_1.default.compare(providePassword, userPassword);
    });
}
exports.isPasswordMatch = isPasswordMatch;
;
function generateRandomString(length = 4, digitOnly = true) {
    let result = '';
    const characters = digitOnly ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateRandomString = generateRandomString;
;
//# sourceMappingURL=authServices.js.map