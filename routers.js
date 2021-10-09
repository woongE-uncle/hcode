const HOME = '/';

//user
const USER = "/user";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";
const USERDETAIL = "/:id";

//data
const DATA = "/data";

//dsta-map
const MAP ="/map";

//data-bbs
const POPOL = "/popol";
const WRITE = "/write";
const UPDATE = "/update";
const DELETE = "/delete";
const POPOLDETAIL = "/:id";

//other data
const DIRECTIONS = "/directions";

const routes = {
    home:HOME,
    user:USER,
    login:LOGIN,
    logout:LOGOUT,
    join:JOIN,
    userdetail:USERDETAIL,
    data:DATA,
    map:MAP,
    popol:POPOL,
    write:WRITE,
    update:UPDATE,
    delete:DELETE,
    bbsDetail:POPOLDETAIL
}

export default routes;