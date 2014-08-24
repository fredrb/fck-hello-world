var rand = require('../public/javascript/generate');
var db   = exports.db = [];

const CHANCE_TO_COMPL = 0.5;
const N_REPEAT        = 750;


db.push({
   name   : "How to create Node.js Application",
   level  : 0,
   author : "Fred",
   tech   : "Node.js"
});

db.push({
   name   : "What the Hell is Wrong with me?",
   level  : 2,
   author : "Someone",
   tech   : "General Programming"
});

db.push({
   name   : "How to read the holy bible of Satan",
   level  : 1,
   author : "Lucifer Himself",
   tech   : "General Programming"
});

db.push({
   name   : "Another shitty way of making something useless",
   level  : 1,
   author : "Internet Troll",
   tech   : "General Programming"
});

for(var i = 0; i < N_REPEAT ; i++){
   db.push({
      name   : rand.generate(CHANCE_TO_COMPL),
      level  : 1,
      author : "generator",
      tech   : "xscript"
   });
}