const port = process.env.PORT | 3000;
const express = require('express');
const path = require('path');
const favicon = require("serve-favicon");
const app = express();

// テンプレートエンジンの有効化
app.set('view engine' , 'ejs');

// favionの配置
app.use(favicon(path.join(__dirname , 'public' , 'images' , 'favicon.ico')));

// 使用するサーバーの選択
app.use("/" , require("./routes/index.js"));

// static resource rooting
// 静的ページへの誘導
app.use("/public" , express.static(path.join(__dirname, '/public')));

// ローカルサーバーを建てる
app.listen(port , () => {
    console.log("port running is " + port);
});