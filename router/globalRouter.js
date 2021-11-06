import express from "express";
import { home } from "../controller/dataController";

const globalRouter = express.Router();

globalRouter.get("/",home);

export default globalRouter;