import express from "express";
import routes from "../routers";

const userRouter = express.Router();

userRouter.get(routes.home,(req,res)=>res.render('home'));
userRouter.get(routes.login,(req,res)=>res.render('login'));

export default userRouter;