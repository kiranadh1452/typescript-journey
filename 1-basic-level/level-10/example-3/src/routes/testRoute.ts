import express, { Request, Response, Router } from "express";

const testRouter: Router = express.Router();

testRouter.use("*", (req: Request, res: Response) => {
    return res.status(200).json({
        status: "success",
        code: 200,
        message: "You're using a test route!",
    });
});

export default testRouter;
