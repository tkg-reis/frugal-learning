const port = process.env.PORT | 3000;
const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const model = require("./server/model/schema.js");
const cookieParser = require("cookie-parser");
const app = express();

// テンプレートエンジンの有効化
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// postの受け取り処理を可能にする
app.use(express.urlencoded({ extended: true }));

// サーバーサイドの隠蔽
app.disable("x-powered-by");

// favionの配置
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// app.use(accessLogger());

// 使用するサーバーの選択
app.use("/", require("./routes/index.js"));

// static resource rooting
// 静的ページへの誘導
app.use("/public", express.static(path.join(__dirname, "/public")));

// ローカルサーバーを建てる
app.listen(port, () => {
  "port running is " + port;
  console.log(`port running is http://localhost:${port}`);
});
