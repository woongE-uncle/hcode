const HOME = '/';

//user
const USER = "/user";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";
const USERDETAIL = "/detail";

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
    userDetail:USERDETAIL,
    data:DATA,
    map:MAP,
    popol:POPOL,
    write:WRITE,
    update:UPDATE,
    delete:DELETE,
    popolDetail(id){
        if(id){
            return `/${id}`;
        }else{
            return POPOLDETAIL;
        }
    }
}

export default routes;