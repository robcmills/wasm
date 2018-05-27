var express = require('express')
var app = express()
var path = require('path')

var staticOptions = {
	setHeaders: function (res, filepath) {
		if (path.extname(filepath) === '.wasm') {
	    res.set('Content-Type', 'application/wasm')
		}
	},
}

app.use(express.static('hello3', staticOptions))
app.use(express.static('hello4', staticOptions))

app.listen(3000, function() { console.log('App listening on port 3000') })