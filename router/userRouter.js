import express from "express";
import { getLogin, postLogin, userDetail } from "../controller/userController";
import routes from "../router";

const userRouter = express.Router();

userRouter.get(routes.login,getLogin);
userRouter.post(routes.login,postLogin);

userRouter.get(routes.userDetail,userDetail);

export default userRouter;