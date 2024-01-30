const router = require("express").Router();

// to home page
router.get("/" , (req, res) => {
    res.render("./index.ejs");
});

// to detail page
router.get("/detail/:id", async(req, res) => {
    // idの部分は可変である。ダイナミックルーティング
    // mongodbのfindOneメソッドと組み合わせる
    let id = req.params.id;
    console.log(id);
    res.send("ok");
});

// to about page
router.get("/about" , (req, res) => {
    res.render("./about.ejs");
});

// to usage page
router.get("/usage" , (req, res) => {
    res.render("./usage.ejs");
});

// to opinion page
router.get("/opinion" , (req, res) => {
    res.render("./opinion.ejs");
});

// to register page
router.get("/register" , (req, res) => {
    res.render("./register.ejs");
});

// 登録処理 sql insert 
// requestのパラメータを取得して、遷移先の画面に送信する処理
router.post("/createConfirm" , (req, res) => {
    // クエリは識別しやすいようにアンダースコアを使用する。
    const _placeName = req.query.placeName;
    const _placeImage = req.query.placeImage;
    const _googlePlace = req.query.googlePlace;
    const _review = req.query.review;
    const _comment = req.query.comment;
    
    res.render("./createConfirm.ejs" 
    , {
        placeName : _placeName,
        placeImage : _placeImage,
        googlePlace : _googlePlace,
        review : _review,
        comment : _comment
    }    
    );
});

module.exports = router ;