import { connection } from "../db";
import routes from "../router";

// connection.query("SELECT * FROM POPOL WHERE popol_id = ?", [ 1 ], function (err, results) {
//     console.log(result)
//     console.log(results[0].popol_id);
//     console.log(results[0].popol_title);
//     console.log(results[0].popol_content=='wellcome');
// })

export const home = (req,res) =>{
    res.render('home');
}

export const map = (req,res) =>{
    console.log("map is request")
    res.render('map');
}

export const popol = (req,res) =>{
    // let id;
    // let title;
    // let date;
    try {
        connection.query("select popol_id,popol_title,date_format(date,'%y-%m-%d') as date from popol",(err,result)=>{
            if(err){
                console.error("popol select error...");
                return;
            }
            res.render('popol',{result});
        })
    } catch (error) {
        console.log('popol cennect db error');
        res.render('home');
    }
}

export const popolDetail = (req,res) =>{
    res.render('popolDetail');
}

export const getWrite = (req,res) =>{
    res.render('write');
}

export const postWrite = (req,res) =>{
    const {
        body:{title,content,mainImg}
    } =req;
    console.log(title,content,mainImg)
    connection.query(`insert into popol(popol_title,popol_content,main_img) values('${title}','${content}','${mainImg}')`,(err,result)=>{
        if(err){
            console.error("insert query error..");
            console.log(err);
            res.render('write');
        }else{
            console.log("insert query is ok~")
            res.redirect(`${routes.data}${routes.popol}`);
        }
    });
}

