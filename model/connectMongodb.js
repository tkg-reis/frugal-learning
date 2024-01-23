const { MongoClient, ServerApiVersion } = require('mongodb');
const env = require('dotenv');

env.config();

// databaseの接続情報

// detabaseへ接続する処理
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function getCollection() {
    try {
        await client.connect();
        client.db('place_info_master');
        console.log("connected");
        // return db.collection('books');
    } catch(e) {
        console.error(e);
        await client.close();
    }
}

getCollection();

//select sql
// console.log("connecting now");
// const sqlSelectSentence = 'SELECT * FROM frugal-learning-places;'
// // return;
// // クエリをデータベースに投げる
// connnection.query(sqlSelectSentence , (err , result) => {
//     if(err) throw console.error("sql error : " + err);
//     console.log(result);
// })