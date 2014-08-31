// Include required modules.
var express = require('express');
var sqlite3 = require('sqlite3').verbose();

// Set up Express app.
var app = express();
app.listen(4000);

// Utility function to render resonse.
function sendResponse(res, sql) {
	var db = new sqlite3.Database('./data/OPA_REVENUE_DUMP_APR2014.sqlite');
	db.all(sql, function(err, rows) {
		res.json(rows);
		db.close();
	});
}

// TODO: Utility function to format address prior to DB lookup.
function formatAddress(address) {
	return address;
}

// Route for lookup by owner name.
app.get('/name/:ownername', function(req, res){
	var sql = 'SELECT DISTINCT(BRT_NUM), ADDRESS, OWNERNAME FROM dbo_REVENUESCAN WHERE OWNERNAME LIKE "' + req.params.ownername.toUpperCase() + '%" ORDER BY OWNERNAME'
	sendResponse(res, sql);
});

// Route for lookup by address.
app.get('/address/:address', function(req, res){
	var sql ='SELECT * FROM dbo_REVENUESCAN WHERE ADDRESS = "' + formatAddress(req.params.address) + '" ORDER BY TAXYEAR DESC';
	sendResponse(res, sql);
});

// Route for lookup by BRT number.
app.get('/number/:brtnumber', function(req, res){
	if(req.query.total) {
		var sql ='SELECT BRT_NUM, OWNERNAME, SUM(TOTAL) AS "TOTAL AMOUNT DUE", ADDRESS FROM dbo_REVENUESCAN WHERE BRT_NUM = ' + req.params.brtnumber;
	}
	else {
		var sql ='SELECT * FROM dbo_REVENUESCAN WHERE BRT_NUM = ' + req.params.brtnumber + ' ORDER BY TAXYEAR DESC';
	}
	sendResponse(res, sql);
});