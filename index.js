var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var KiteConnect = require("kiteconnect").KiteConnect;
var KiteTicker = require("kiteconnect").KiteTicker;
var routes= require("./routes/routes");
var ticker = new KiteTicker({
    api_key: "api_key",
    access_token: "access_token"
});
var kc = new KiteConnect({api_key: "your_api_key"});

kc.generateSession("request_token","api_secret")
.then(function(response){
    init();
})
.catch(function(err){
    console.log(err);
})
