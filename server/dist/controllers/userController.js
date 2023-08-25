"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
// GET functions ----------------------------------
const getAllUsers = (req, res) => {
    res.send("got all the users");
    // db and business logic
    console.log("all users route");
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    res.send("got user by id");
    // db and business logic
    console.log("user by id");
};
exports.getUserById = getUserById;
// POST functions ----------------------------------
const createUser = (req, res) => {
    const name = req.body.name;
    console.log(req.body);
    res.send("user added " + name);
};
exports.createUser = createUser;
// DELETE functions ----------------------------------
const deleteUser = (req, res) => {
    const userId = req.body.id;
    res.send("user deleted " + userId);
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map