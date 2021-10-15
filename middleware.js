import routes from "./router";

export const localMiddleware = (req,res,next) => {
    res.locals.routes = routes;
    next();
};