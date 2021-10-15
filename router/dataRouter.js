import express from "express";
import { getWrite, map, popol, popolDetail, postWrite} from "../controller/dataController";
import routes from "../router";

const dataRouter = express.Router();

dataRouter.get(routes.map,map);
dataRouter.get(routes.popol,popol);

dataRouter.get(routes.write,getWrite);
dataRouter.post(routes.write,postWrite);

dataRouter.get(routes.popolDetail(),popolDetail);

export default dataRouter;