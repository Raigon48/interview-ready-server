import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { ENV } from "../config";
import { DBProvider } from "./db/db.provider";

dotenv.config();

const app: Express = express();

const port: number = ENV.PORT;

app.get('/test', (req: Request, res: Response) => {
    res.send("Hello Wrold");
});

app.listen(port, () => {
    if(ENV.DB_CONNECTION_URI) {
        DBProvider.getConnection(ENV.DB_CONNECTION_URI);
        console.log("Connected to DB");
    }
    
    console.log("Server Listening on PORT: ", port);
});

