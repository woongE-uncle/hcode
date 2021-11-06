import routes from "./router";
import multer  from "multer";

const singleImgUpload = multer({dest:'uploads/'});

export const imgUpload = singleImgUpload.single('mainImg');

export const localMiddleware = (req,res,next) => {
    res.locals.routes = routes;
    res.locals.user = req.cookies.user || null
    next();
};