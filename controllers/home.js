/**
 * Created by fredrb on 8/19/14.
 */
exports.show = function(req, res){
   var data = {
      title : "Home page"
   }
   res.render('pages/home', data);
}