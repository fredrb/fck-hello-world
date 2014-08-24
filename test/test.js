var test   = require('../public/javascript/generate');
var assert = require('assert');
var should = require('should');

describe('@Text Generator Tests', function(){
   describe('#Random Text:', function(){
      it('should generate random test', function(){
         assert.equal(typeof(test.generate()), typeof("string"));
         //console.log("\t Result: " + typeof(test.generate()));
      });
      it('should return a number', function(){
         assert.equal(typeof(test.prefix.length), typeof(1));
      });
      it('should be 7', function(){
         test.prefix.length.should.be.exactly(7);
      });

      describe("# SHOULD GENERATE SOME DECENT TEXT", function(){
         it('should be a string', function(){
            assert.equal(typeof(test.generate(0.5)), typeof("string"));
         });
         it('length should return a number', function(){
            test.generate(0.5).length.should.be.a.Number;
         })
         it('should generate a string', function(){
            test.generate(0.5).length.should.be.above(4);
         })

         console.log("\n\t" + test.generate(0.5));
      });
   });
});

