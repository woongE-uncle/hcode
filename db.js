import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
    host:'localhost',
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:'interior'
})


// async, await 를 사용하지 않기 때문에 callback 함수를 사용해서 results 를 가져온다.


