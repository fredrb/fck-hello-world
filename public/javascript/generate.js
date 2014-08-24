/*
 *  CREATE RANDOM TUTORIALS
 * */
var prefix   = exports.prefix   = [];
var activity = exports.activity = [];
var compl    = exports.compl    = [];


prefix.push(
   ["How to"], ["Top 10 ways to"], ["Learn how to"],
   ["The ways to"], ["Three easy steps to"],
   ["The easiest way to"], ["It's not hard to"],
   ["Technics to"], ["Ultimate Secret to"],
   ["Master tutorial to"], ["Advance class of how to"],
   ["Master teaches how to"]
);

activity.push(
   ["create a video game"], ["be a better programmer"], ["code better"],
   ["create a software"], ["design a website"], ["be a better programmer"],
   ["be a Linux overlord master"], ["innovate the world"], ["understand other people's code"],
   ["enojoy every last line of code"], ["take things differently"], ["listen to your user"],
   ["belive in your javascript"], ["create a powerful node application"], ["crush php with a massive js hammer"],
   ["destroy the world"]
);

compl.push(
   ["today"],["in no time"], ["like a motherfucker"], ["with skills"],
   ["like a motherfucking jedi"], ["like the master"], ["with class"],
   ["like other people do"], ["without suffering from backpain"], ["with glory"],
   ["like never before"]
);

var generate = exports.generate = function(chance){
   var string = "";
   var random = (Math.round((Math.random()) * 20));
   while(random > prefix.length - 1){
      random = (Math.round((Math.random()) * 20));
   }
   string = string + prefix[random];

   while(random > activity.length - 1){
      random = (Math.round((Math.random()) * 20));
   }
   string = string + " " + activity[random];

   random = (Math.round((Math.random()) * 20));
   if(random > chance){
      while(random > compl.length - 1){
         random = (Math.round((Math.random()) * 20));
      }
      string = string + " " + compl[random];
   }
   return string;
}


