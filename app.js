const port = process.env.PORT | 3000;
const express = require('express');
const path = require('path');
const favicon = require("serve-favicon");
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const mongoose = require('mongoose');
const model = require("./model/schema.js");
const app = express();


// テンプレートエンジンの有効化
app.set('view engine' , 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// postの受け取り処理を可能にする
app.use(express.urlencoded({ extended: true }));

// サーバー上の保存先を定義する。
const strage = multer.diskStorage({
    destination(req, file , callback) {
        // uploadsフォルダは自動生成される
        callback(null,path.resolve(__dirname, "./uploads"))
    },
    // アップロードされたファイルにアップロードされた時間と元々付いていた名前を使って保存するように指定
    filename(req, file, callback) {
        const uniqueSuffix = Math.random().toString(26).substring(4, 10);
        callback(null, `${Date.now()}-${uniqueSuffix}-${file.originalname}`);
    },
})
// サーバーサイドの隠蔽
app.disable("x-powered-by");

// favionの配置
app.use(favicon(path.join(__dirname , 'public' , 'images' , 'favicon.ico')));

// app.use(accessLogger());

// 使用するサーバーの選択
app.use("/" , require("./routes/index.js"));

// static resource rooting
// 静的ページへの誘導
app.use("/public" , express.static(path.join(__dirname, '/public')));

// ローカルサーバーを建てる
app.listen(port , () => {
    "port running is " + port;
});