import express, { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

// creating and configuring the app
const port = 3000;
const app: Express = express();

app.set("port", port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// As this is a test app, let's provide a single response for all requests
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
