const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
// サーバー上の保存先を定義する。
const storage = multer.diskStorage({
    
    destination : (req, file , callback) => {
        // uploadsフォルダは自動生成される
        callback(null, __dirname);
    },
    filename(req, file, callback) {
        const uniqueSuffix = Math.random().toString(26).substring(4, 10);
        // アップロードされたファイルにアップロードされた時間と元々付いていた名前を使って保存するように指定
        callback(null, `${Date.now()}-${uniqueSuffix}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage,

    // fileFilter: (req, file, callback) => {
    //     console.log(file.mimetype);
    //     if(["image/jpeg", "image/png", "image/jpg"].includes(file.mimetype)) {
    //         callback(null, true);
    //         return;
    //     }
    //     callback(new TypeError('invalid file error'));
    // }
});

module.exports = upload;