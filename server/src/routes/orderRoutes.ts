import express from "express";
const router = express.Router();

import * as controller from "../controllers/orderController";

// GET ROUTES --------------------------------------------------
router.get("/", controller.getAllOrders);
router.get("/:id", controller.getOrderById);

// POST ROUTES --------------------------------------------------
// authenticate
router.post("/", controller.createOrder);

// PATCH ROUTES --------------------------------------------------
router.patch("/");

// DELETE ROUTES --------------------------------------------------
router.delete("/:id", controller.deleteOrder)

export default router;