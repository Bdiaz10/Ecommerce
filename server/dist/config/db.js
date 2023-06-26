"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = void 0;
const connectMongo = () => {
    try {
        // // connect to mongoose
        // await mongoose.connect(process.env.MONGODB_URI, {
        // });
        console.log('Connected to MongoDB');
    }
    catch (e) {
        console.log("Mongo db connection error: ", e);
        process.exit(1);
    }
};
exports.connectMongo = connectMongo;
//# sourceMappingURL=db.js.map