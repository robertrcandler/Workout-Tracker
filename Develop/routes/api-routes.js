const router = require("express").Router();
const path = require("path");

//get functions for each part
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
