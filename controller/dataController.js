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
    try {
        connection.query("select popol_id,popol_title,main_img from popol order by popol_id desc",(err,result)=>{
            if(err){
                console.error("popol select error...");
                console.log(err);
                return;
            }
            res.render('popol',{result});
        })
    } catch (error) {
        console.log('popol cennect db error');
        res.render('home');
    }
    // res.render('popol')
}

export const popolDetail = (req,res)=>{
    console.log('detailrouter is call')
    const {
        params:{id}
    } = req;
    try {
        connection.query(`select popol_id,popol_title,popol_content,main_img from popol where popol_id = '${id}'`,(err,result)=>{
            if(err){
                console.error("popol select error...");
                console.log(err);
                return;
            }
            const{
                popol_content
            }=result[0];
            const popolContent = String(popol_content).split("\r\n\r\n")
            res.render('popolDetail',{data:result[0],popolContent});
        })
    } catch (error) {
        console.log('popol cennect db error');
        res.render('home');
    }
}

export const getPopolEdit = (req,res) =>{
    console.log('editrouter is call')
    const {
        params:{id}
    } = req;
    try {
        connection.query(`select popol_id,popol_title,popol_content,main_img from popol where popol_id = '${id}'`,(err,result)=>{
            if(err){
                console.error("popol select error...");
                console.log(err);
                return;
            }

            res.render('popolEdit',{data:result[0]});
        })
    } catch (error) {
        console.log('popol cennect db error');
        res.render('home');
    }
}

export const postPopolEdit = (req,res) =>{
    const {
        body:{title,content},
        params:{id}
    } =req;
    if(req.file == undefined){
        connection.query(`update popol set popol_title=?,popol_content=? where popol_id=?`,[title,content,id],(err,result)=>{
            if(err){
                console.error("update query error..");
                res.redirect(`${routes.home}`);
            }else{
                console.log("update query is ok~")
                res.redirect(`${routes.data}${routes.popol}`);
            }
        });
    }else{
        connection.query(`update popol set popol_title=?,popol_content=?,main_img=? where popol_id=?`,[title,content,req.file.filename,id],(err,result)=>{
            if(err){
                console.error("update query error..");
                res.redirect(`${routes.home}`);
            }else{
                console.log("update query is ok~")
                res.redirect(`${routes.data}${routes.popol}`);
            }
        });
    }
}

export const popolDelete = (req,res)=>{
    const { params :{id}}=req;
    console.log(id);
    connection.query(`DELETE FROM popol WHERE popol_id = ${id}`,(error, results, fields) => {
        if (error){
            console.log(`delete query error...`)
            res.redirect(`${routes.data}${routes.popol}`)
        }else{
            console.log(`delete query is ok~~`)
            res.redirect(`${routes.data}${routes.popol}`)
        }
      })
}

export const getWrite = (req,res) =>{
    res.render('write');
}

export const postWrite = (req,res) =>{
    const {
        body:{title,content}
    } =req;
    const titleText = String(title).replaceAll("'","''");
    const contentText = String(content).replaceAll("'","''");
    connection.query(`insert into popol(popol_title,popol_content,main_img) values('${titleText}','${contentText}','${req.file? req.file.filename : "null"}')`,(err,result)=>{
        if(err){
            console.error("insert query error..");
            console.log(err);
            res.redirect(`${routes.data}${routes.write}`);
        }else{
            console.log("insert query is ok~")
            res.redirect(`${routes.data}${routes.popol}`);
        }
    });
    // res.render('home')
}

