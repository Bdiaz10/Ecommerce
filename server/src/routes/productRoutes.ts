import express from "express";
const router = express.Router();

import isAdmin from "middleware/isAdmin";
import * as controller from "../controllers/productController";

// GET ROUTES --------------------------------------------------
router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProductById)

// POST ROUTES --------------------------------------------------
router.post("/", controller.createProduct)

// PATCH ROUTES --------------------------------------------------
router.patch("/:id")

// DELETE ROUTES --------------------------------------------------
router.delete("/:id", controller.deleteProduct)


export default router;