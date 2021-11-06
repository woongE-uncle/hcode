import { connection } from "../db";
import routes from "../router";

export const getLogin = (req,res) =>{
    res.render('login');
}

export const postLogin = (req,res) =>{
    console.log("postLogin called..")
    
    const{
        body:{email,password}
    }=req;

    const userInfo = {
        name:"jin",
        age:"22"
    }

    // console.log("session loginInfo :",req.session)
    // if(req.session.user){
    //     console.log(req.session.user)
    // }else{
    //     console.log("req.session.user 등록 완료")
    //    req.session.user=userInfo
    // }

    connection.query("select * from user where user_email=?",email,(err,result)=>{
        if(err||result[0]==undefined){
            console.log("login error: ",err);
            res.redirect(routes.home);
        }else{
            console.log("email is right")
            const dbpw = result[0].user_password;

            if(dbpw == password){
                console.log('login success');
                res.cookie("user",email)
                res.redirect(routes.home)
            }else{
                console.log('pw not currect')
                res.redirect(routes.home);
            }
        }
    })
}

export const logout = (req,res) =>{
    res.clearCookie("user");
    res.redirect(`${routes.home}`)                  
}

export const userDetail = (req,res) =>{
    console.log("userDetail")
    res.render('userDetail');
}