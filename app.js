import express from "express";
import userRouter from "./router/userRouter";

const app = express();

app.set('view engine','pug');

app.use("/dist",express.static("dist"))
app.use('/',userRouter);

export default app;
