/**
 * Created by fredrb on 8/19/14.
 */
$(document).ready(function(){
   $(".menu a").hover(
      function(){
         $(this).css({
            "background-color" : "rgb(225,225,223)"
         })
      },
      function(){
         $(this).css({
            "background-color" : "rgb(245,245,243)"
         })
      }
   );
});