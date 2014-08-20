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

   /*
   * @TODO - FIX BUG
   * > .list td a
   * > problem when hover $("td a") then $("td").
   * > background color of $("a") is lost.
   * */

   $(".list tr :nth-child(1)").hover(
      function(){
            if( !$(this).hasClass("caption") ) {
               $(this).css({
                  "background-color": "rgb(215,215,213)"
               });
               $(this).children("a").css({
                  "background-color": "rgb(215,215,213)"
               });
            }
         },
         function(){
            if( !$(this).hasClass("caption") ) {
               $(this).css({
                  "background-color": "rgb(229,229,225)"
               });
               $(this).children("a").css({
                  "background-color": "rgb(229,229,225)"
               });
            }
         }

   );
});