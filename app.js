import express from "express";
import userRouter from "./router/userRouter";
import dataRouter from "./router/dataRouter"; 
import helmet from "helmet";
import cors from "cors";
import routes from "./routers";
import { localMiddleware } from "./middleware";

const app = express();

app.set('view engine','pug');

app.use(cors({origin:'https://use.fontawesome.com/releases/v5.5.0/css/all.css'}));
app.use(helmet({contentSecurityPolicy:false}));
app.use("/dist",express.static("dist"));
app.use("/src",express.static("src"));

app.use(localMiddleware);

app.use(routes.home,userRouter);
app.use(routes.data,dataRouter);

export default app;
