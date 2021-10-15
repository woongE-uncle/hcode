import express from "express";
import mysql from "./db";
import dotenv from "dotenv";
import userRouter from "./router/userRouter";
import dataRouter from "./router/dataRouter"; 
import helmet from "helmet";
import bodyParser from "body-parser";
import routes from "./router";
import { localMiddleware } from "./middleware";
import { home } from "./controller/dataController";

dotenv.config();

const app = express();

app.set('view engine','pug');

// app.use(helmet({contentSecurityPolicy:false}));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/dist",express.static("dist"));
app.use("/src",express.static("src"));

app.use(localMiddleware);

app.get(routes.home,home);
app.use(routes.user,userRouter);
app.use(routes.data,dataRouter);

export default app;
