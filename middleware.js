import routes from "./routers";

export const localMiddleware = (req,res,next) => {
    res.locals.routes = routes;
    next();
};