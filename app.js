/**
 * Created by fredrb on 8/17/14.
 */
var express = require("express");
var logger  = require("morgan");

// Basic Config
var app    = express();
var router = express.Router();
var PORT   = process.env.PORT || 8080 ;

//Set view engine and view folder
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//Set public folder
var _public = __dirname + '/public';
app.use(express.static(_public));
app.use(logger('dev'));


// ROUTES
var rHome   = require('./controllers/home');
var rBrowse = require('./controllers/browse');

router.get('/', rHome.show);
router.get('/browse', rBrowse.show);

app.use('/', router);

if(!module.parent){
   app.listen(PORT);
   console.log('Express started on port 8080');
}

