// import the required packages
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import express, { Express, Request, Response, NextFunction } from "express";

// import routes
import UserRouter from "./src/v1/users/router.js";

// set up dotenv, to allow us to use environment variables
dotenv.config({
    path: "./src/config/config.env",
});

// creating and configuring the app
const port = process.env.PORT || 8000;
const app: Express = express();

app.set("port", port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        success: true,
        message: "Express app is working",
    });
});

app.use("/api/v1/users", UserRouter);

// Sample route
app.use("*", (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
        success: false,
        message: "API endpoint doesn't exist",
    });
});

// starting the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
