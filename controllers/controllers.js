var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

var KiteConnect = require("kiteconnect").KiteConnect;
var KiteTicker = require("kiteconnect").KiteTicker;

exports.login = function(req,res){
    var login=getLoginURL();
    res.status(200).send(login);
}

exports.cancel_MForder = function(req,res){
    cancelMFOrder(req.body.order_id);
}

exports.cancel_MFSIP = function(req,res){
    cancelMFSIP(req.body.sip_id);
}

exports.historical_Data = function(req,res){
    res.status(200).send(getHistoricalData(req.body.instrument_token, req.body.interval,req.body.from_date,req.body.to_date,req.body.continuous));
}

exports.get_Instruments = function(req,res){
    res.status(200).send(req.body.segment);
}

