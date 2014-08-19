/**
 * Created by fredrb on 8/17/14.
 */
var files = require('./files');

exports.show = function(req, res){
   var data = {
      title  : 'Browse Page',
      db     : files.db
   }
   res.render('pages/browse', data);
}

// @todo FILTER CONTROLLERS