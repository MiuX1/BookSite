import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS Configuration
// app.use(cors({
//     origin: process.env.CORS_ORIGIN || "http://localhost:5173",
//     //  // Fallback if CORS_ORIGIN is not defined
//     credentials: true,
// }));



const corsOptions = {
  origin: 'http://localhost:5173', // Specify the exact frontend origin (React app's URL)
  credentials: true, // Allow credentials (cookies)
};

app.use(cors(corsOptions));

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
import userProfile from "./routes/profile.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)
app.use("/api/v1/selling",sellingRouter)
app.use("/api/v1/marketplace",marketplaceRouter)
app.use("/api/v1/profile",userProfile)



//http://localhost:8000/api/v1/users/register

export default app;
