import express from "express";
import routes from "../routers";

const router = express.Router();

router.get(routes.home,(req,res)=>{res.render("home")});

export default router;