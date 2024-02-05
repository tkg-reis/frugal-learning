const router = require("express").Router();
const multer = require("multer");
const upload = require("../uploads/multerConfig.js");
// const getAllInfo = require("../server/model/connectMongodb.js").getAllInfo;
const PlaceModel = require("../server/model/schema.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("../server/helper/db.js");
const path = require("path");

// to home page
router.get("/", async (req, res) => {
  // mongodb find({})を使用する
  const allInfo = await PlaceModel.find();
  res.render("index", {
    allInfo: allInfo,
  });
});

// to detail page
router.get("/:id", async(req, res) => {
    // idの部分は可変である。ダイナミックルーティング
    // mongodbのfindOneメソッドと組み合わせる
    // 個々のデータを拾うときに使用する。
    const singleData = await PlaceModel.findById(req.params.id);

    res.render("./detailData.ejs" , {singleData: singleData});
});

// 登録処理 sql insert
router.post("/", upload.single("placeImage"), (req, res) => {
  //     // クエリは識別しやすいようにアンダースコアを使用する。
  //     // バックエンドでバリデーション
  const _placeName = req.body.placeName;
  const _placeImage = req.file;
  const _googlePlace = req.body.googlePlace;
  const _review = req.body.review;

  const imagePath = path.resolve(".", "/uploads", req.file.filename);

  console.log(imagePath);
  console.log(__dirname);
  console.log(__filename);
  console.log(_placeImage);
  console.log(req.body);
  if (
    _placeName == "" ||
    _placeImage == undefined ||
    _googlePlace == "" ||
    _review == ""
  ) {
    res.redirect("/register");
  } else {
    PlaceModel.create(req.body)
      .then((result) => {
        console.log(result);
        res.redirect("/");
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

// to about page
router.get("/about", (req, res) => {
  res.render("./about.ejs");
});

// to usage page
router.get("/usage", (req, res) => {
  res.render("./usage.ejs");
});

// to opinion page
router.get("/opinion", (req, res) => {
  res.render("./opinion.ejs");
});

// to register page
router.get("/register", (req, res) => {
  res.render("./register.ejs", {
    msg: "regist here!!",
  });
});

module.exports = router;
