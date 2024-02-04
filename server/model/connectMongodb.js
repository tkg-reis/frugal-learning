

// database接続処理
// ここでデータベースと該当のテーブルに接続する処理を記載。
async function getCollection() {
    try {
        await client.connect();
        const db = client.db('place_info_master');
        return db.collection("place_info_master");
    } catch(e) {
        console.error(e);
        await client.close();
    }
}

async function getAllInfo() {
    const col = await getCollection();
    let cursor = col.find({name: 'Destiny USA',});
    const result = await cursor.toArray();
    console.log(result);
    await client.close();
}
// getAllInfo();

// ドキュメント形式なので、過去に登録されたデータに遵守する必要は必ずしも無い
async function insertInfo() {
    const col = await getCollection();
    let result = await col.insertOne({title : "yahoo"}); //insertMany
    console.log(result);
    await client.close();
}

// insertInfo();

async function updateInfo() {
    const col = await getCollection();
    let result = await col.updateOne({});
    console.log(result);
    await client.close();
}



module.exports = {
    getAllInfo,
    insertInfo,
    updateInfo,

} ;