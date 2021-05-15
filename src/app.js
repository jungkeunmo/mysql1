import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import mysql from "mysql2";

const PORT = 7000;
const app = express();

const conn = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "fourleaf0309",
    port : "3306",
    database : "academy",
});

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(helmet());
app.use(morgan(`dev`));

app.get("/", (req, res) => {

    // 데이터베이스 laptop을 요청하고,
    // 결과(배열)을 받는다.

    res.render("home");
});

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START🙃`);
});