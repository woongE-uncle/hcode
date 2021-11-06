import express from "express";
import mysql from "./db";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";
import userRouter from "./router/userRouter";
import dataRouter from "./router/dataRouter"; 
import routes from "./router";
import { localMiddleware } from "./middleware";
import globalRouter from "./router/globalRouter";

dotenv.config();

const app = express();

app.set('view engine','pug');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.use("/dist",express.static("dist"));
app.use("/src",express.static("src"));
app.use("/uploads",express.static("uploads"));

app.use(localMiddleware);

app.use(routes.home,globalRouter);
app.use(routes.user,userRouter);
app.use(routes.data,dataRouter);

export default app;
