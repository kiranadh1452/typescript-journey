// import the required packages
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import express, { Express, Request, Response, NextFunction } from "express";

// import the router
import testRouter from "./src/routes/testRoute";

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

// use the test route
app.use("/test", testRouter);

// For other endpoints, let's provide a single response for all requests
app.use("*", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        status: "success",
        code: 200,
        message: "Welcome to the test app!",
    });
});

// starting the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
