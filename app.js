import express from "express";
import userRouter from "./router/userRouter";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.set('view engine','pug');

app.use(cors({origin:'https://use.fontawesome.com/releases/v5.5.0/css/all.css'}));
app.use(helmet({contentSecurityPolicy:false}));
app.use("/dist",express.static("dist"));
app.use('/',userRouter);

export default app;
