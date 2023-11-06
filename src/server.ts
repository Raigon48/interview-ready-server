import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.get('/test', (req: Request, res: Response) => {
    res.send("Hello Wrold");
});

app.listen(port, () => {
    console.log("Server Listening on PORT: ", port);
});

