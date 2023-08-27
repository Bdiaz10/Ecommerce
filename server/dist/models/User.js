"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
})(UserRole || (UserRole = {}));
const userModel = new mongoose_1.default.Schema({
    fName: {
        type: String,
        required: false,
    },
    lName: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: UserRole.USER,
        enum: Object.values(UserRole),
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
        required: true,
    },
});
const User = mongoose_1.default.model('User', userModel);
exports.default = User;
//# sourceMappingURL=User.js.map