import express, { Request, Response, Router, NextFunction } from "express";

const UserRouter: Router = express.Router();

const sampleControllerFunction = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        return res.status(200).json({
            code: 200,
            message: "Success",
            data: "This is a sample controller function",
        });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            message: "Internal server error",
        });
    }
};

// This is a test endpoint
UserRouter.get("/test", (req: Request, res: Response) => {
    return res.status(200).json({
        code: 200,
        message: "Success",
        data: "Test endpoint - Users",
    });
});

// Get all users
UserRouter.get("/", sampleControllerFunction);

// Create a new user
UserRouter.post("/", sampleControllerFunction);

// Get a specific user by ID
UserRouter.get("/:id", sampleControllerFunction);

// Update a specific user by ID
UserRouter.put("/:id", sampleControllerFunction);

// Delete a specific user by ID
UserRouter.delete("/:id", sampleControllerFunction);

// login user
UserRouter.post("/login", sampleControllerFunction);

export default UserRouter;
