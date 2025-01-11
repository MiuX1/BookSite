import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS Configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173", // Fallback if CORS_ORIGIN is not defined
}));

// Parse JSON and URL-encoded data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files
app.use(express.static("public"));

// Parse cookies
app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js"
import sellingRouter from "./routes/bookselling.routes.js"
import marketplaceRouter from "./routes/marketplace.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)
app.use("/api/v1/selling",sellingRouter)
app.use("/api/v1/marketplace",marketplaceRouter)



//http://localhost:8000/api/v1/users/register

export default app;
