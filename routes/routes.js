var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

var KiteConnect = require("kiteconnect").KiteConnect;
var KiteTicker = require("kiteconnect").KiteTicker;

const controller = require("../controllers/controllers");



module.exports = router;