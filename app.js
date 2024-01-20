const port = process.env.PORT | 3000;
const express = require('express');
const path = require('path');
const favicon = require("serve-favicon");
const fs = require('fs');

const bodyParser = require('body-parser');
const logger = require('./lib/log/logger.js');
const applicationLogger = require("./lib/log/applicationlogger.js");
const accessLogger = require("./lib/log/accessLogger.js");
const app = express();

// テンプレートエンジンの有効化
app.set('view engine' , 'ejs');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

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