const express = require("express");
const res = require("express/lib/response");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, function () {
    console.log("listening on 8080");
});

app.get("/pet", function (요청, 응답) {
    응답.send("펫 용품 쇼핑할 수 있는 페이지입니다.");
});
app.get("/beauty", function (req, res) {
    res.send("뷰티 용품 쇼핑 페이지입니다.");
});
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/write", function (req, res) {
    res.sendFile(__dirname + "/write.html");
});

app.post("/add", function (req, res) {
    res.send("전송완료");
});
