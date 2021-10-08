const HOME = '/';

//user
const USER = "/user";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";
const USERDETAIL = "/:id";

//bbs
const BBS = "/bbs";
const WRITE = "/write";
const UPDATE = "/update";
const DELETE = "/delete";
const BBSDETAIL = "/:id";

//other data
const DIRECTIONS = "/directions";

const routes = {
    home:HOME,
    user:USER,
    login:LOGIN,
    logout:LOGOUT,
    join:JOIN,
    userdetail:USERDETAIL,
    bbs:BBS,
    write:WRITE,
    update:UPDATE,
    delete:DELETE,
    bbsDetail:BBSDETAIL


}

export default routes;