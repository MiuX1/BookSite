// import { ApiError } from "../utils/ApiError.js";
// import  asyncHandler  from "../utils/asyncHandler.js";
// import jwt from "jsonwebtoken"
// import { User } from "../Models/user.model.js";

// export const verifyJWT = asyncHandler(async(req, _, next) => {
//     try {
//         const token = req.header("Authorization")?.replace("Bearer ", "");
        
//          console.log(token);
//         if (!token) {
//             throw new ApiError(401, "Unauthorized request")
//         }
    
//         const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
//         const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
//         if (!user) {
            
//             throw new ApiError(401, "Invalid Access Token")
//         }
    
//         req.user = user;
//         next()
//     } catch (error) {
//         throw new ApiError(401, error?.message || "Invalid access token")
//     }
    
// })

// export const verifyJWT = asyncHandler(async (req, _, next) => {
//     try {
//         // Log the cookie and header to see what's being sent
//         console.log("Cookies:", req.cookies);
//         console.log("Authorization Header:", req.header("Authorization"));
        
//         const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
//         console.log("Token:", token); // Log the token value

//         if (!token) {
//             console.log("No token found");
//             throw new ApiError(401, "Unauthorized request");
//         }
    
//         const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//         console.log("Decoded Token:", decodedToken); // Log the decoded token

//         const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
//         if (!user) {
//             console.log("User not found");
//             throw new ApiError(401, "Invalid Access Token");
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         console.log("Error:", error.message);
//         throw new ApiError(401, error?.message || "Invalid access token");
//     }
// });

import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../Models/user.model.js";

// Middleware to verify access tokens
export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        // Extract the token from the Authorization header
        const token = req.header("Authorization")?.replace("Bearer ", "");
        console.log("Received Token:", token);

        if (!token) {
            throw new ApiError(401, "Unauthorized request: No token provided");
        }

        // Verify the token
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log("Decoded Token:", decodedToken);

        // Fetch the user from the database using the decoded token
        const user = await User.findById(decodedToken._id).select("-password -refreshToken");
        if (!user) {
            throw new ApiError(401, "Invalid Access Token: User not found");
        }

        // Attach user information to the request object
        req.user = user;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});

// Middleware to verify refresh tokens
export const verifyRefreshToken = asyncHandler(async (req, _, next) => {
    try {
        // Extract the refresh token from a custom header
        const refreshToken = req.header("x-refresh-token");
        console.log("Received Refresh Token:", refreshToken);

        if (!refreshToken) {
            throw new ApiError(401, "Unauthorized request: No refresh token provided");
        }

        // Verify the refresh token
        const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        console.log("Decoded Refresh Token:", decodedToken);

        // Fetch the user from the database using the decoded token
        const user = await User.findById(decodedToken._id).select("-password");
        if (!user) {
            throw new ApiError(401, "Invalid Refresh Token: User not found");
        }

        // Attach user information to the request object
        req.user = user;
        next();
    } catch (error) {
        console.error("Refresh Token Verification Error:", error.message);
        throw new ApiError(401, error?.message || "Invalid refresh token");
    }
});
