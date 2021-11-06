import express from "express";
import { getPopolEdit, getWrite, map, popol, popolDelete, popolDetail, postPopolEdit, postWrite} from "../controller/dataController";
import { imgUpload } from "../middleware";
import routes from "../router";

const dataRouter = express.Router();

dataRouter.get(routes.map,map);
dataRouter.get(routes.popol,popol);

dataRouter.get(routes.write,getWrite);
dataRouter.post(routes.write,imgUpload,postWrite);

dataRouter.get(routes.popolDetail(),popolDetail);
dataRouter.post(routes.popolDelete(),popolDelete);

dataRouter.get(routes.popolEdit(),getPopolEdit)
dataRouter.post(routes.popolEdit(),imgUpload,postPopolEdit)

export default dataRouter;