import express from "express"
const router = express.Router();

import isAdmin from "middleware/isAdmin";
import * as controller from "../controllers/userController"

// GET ROUTES --------------------------------------------------
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);

// POST ROUTES -------------------------------------------------
router.post('/', controller.createUser);

// PATCH ROUTES -------------------------------------------------
router.patch("/");

// DELETE ROUTES -----------------------------------------------
router.delete('/:id', controller.deleteUser);

export default router; 