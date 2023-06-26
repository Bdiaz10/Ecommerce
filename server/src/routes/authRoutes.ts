import express from "express"
const router = express.Router();
import * as controller from "../controllers/authController"

// POST ROUTES -------------------------------------------------
router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.post('/register', controller.register);

export default router;