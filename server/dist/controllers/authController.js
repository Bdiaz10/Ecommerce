"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.logout = exports.login = void 0;
const login = (req, res) => {
    res.send("Logging in !!!");
    // make sure user is in mongo
    // log them in with token, etc
};
exports.login = login;
const logout = (req, res) => {
    // log out from session
    // return to sign in screen
    res.send("Loggin out!!");
};
exports.logout = logout;
const register = (req, res) => {
    // add to mongo db
    // log in
    res.send("Registering a new user!");
};
exports.register = register;
//# sourceMappingURL=authController.js.map