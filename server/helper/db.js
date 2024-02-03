// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const env = require('dotenv');

env.config();

mongoose.set("strictQuery", true);

// databaseの接続情報

// detabaseへ接続する処理

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.once('error', function (err) {
  console.error('connection error: ', err);
});

db.once('open', function () {
  console.log('Connected successfully');
});
