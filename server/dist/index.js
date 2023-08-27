"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
// load environment variables
dotenv_1.default.config();
// create express app
const app = (0, express_1.default)();
console.log("created express app...");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
console.log("cors enabled...");
// connect to Mongo DB
(0, db_1.default)();
// -- App Routes ------
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
app.use('/api/user', userRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
app.use('api/order', orderRoutes_1.default);
app.use('api/cart', cartRoutes_1.default);
app.use('api/product', productRoutes_1.default);
app.listen(process.env.PORT || 3001, () => {
    console.log("app is avaible on port: " + "3001");
});
//# sourceMappingURL=index.js.map