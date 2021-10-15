import { connection } from "../db";
import routes from "../router";

export const getLogin = (req,res) =>{
    res.render('login');
}

export const postLogin = (req,res) =>{
    const insertID = 0;
    const insertPW = 0;
    connection.query("select * from user where user_id = ?",insertID,(err,result)=>{
        if(err){
            console.log('login error: ',err);
            res.redirect(routes.login);
        }else{
            if(insertID == result[0].user_id){
                if(insertPW == result[0].user_password){
                    
                }
            }

        }
    })
}

export const userDetail = (req,res) =>{
    console.log("userDetail")
    res.render('userDetail');
}