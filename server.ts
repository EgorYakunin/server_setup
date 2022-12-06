import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("hi mom!");
})

app.listen(3001, () => console.log("server is up"));