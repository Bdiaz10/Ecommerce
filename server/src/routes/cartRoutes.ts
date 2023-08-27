import express from "express";
const router = express.Router()

import authenticate from "middleware/auth";
import isAdmin from "middleware/isAdmin";
import * as controller from "../controllers/cartController"
// GET ROUTES --------------------------------------------------
router.get("/", controller.getAllCarts);
router.get("/:id", controller.getCartById);

// POST ROUTES --------------------------------------------------
router.post("/", controller.createCart);

// PATCH ROUTES --------------------------------------------------
router.patch("/");

// DELETE ROUTES --------------------------------------------------
router.delete("/:id", controller.deleteCart);

export default router;