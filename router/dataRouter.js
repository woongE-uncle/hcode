import express from "express";
import routes from "../routers";

const dataRouter = express.Router();

dataRouter.get(routes.map,(req,res)=>res.render('map'));
dataRouter.get(routes.popol,(req,res)=>res.render('portpolio'));
dataRouter.get(routes.write,(req,res)=>res.render('write'));

export default dataRouter;