 import {
   userAge
 } from './../src/galactic-calc.js';
 import {
   Galactic
 } from './../src/galactic-calc.js';

 describe('planet age calulations', function() {
   //User input test
   //Pass
   it("it should respond as 'true' if syntax is correct.", function() {
     const myAge = userAge(33);
     expect(myAge).toEqual(true);
   });
   //Age calculator tests
   //Pass
   it("it should return earthAge * 0.24 to determine age on Mercury.", function() {
     let myAgeOnMercury = new Galactic();
     myAgeOnMercury.mercuryAgeCalc();
     expect(myAgeOnMercury.mercuryAge).toEqual(7.92);
   });
   //Pass
   it("it should return earthAge * 0.62 to determine age on Venus.", function() {
     let myAgeOnVenus = new Galactic();
     myAgeOnVenus.venusAgeCalc();
     expect(myAgeOnVenus.venusAge).toEqual(20.46);
   });
   //Pass
   it("it should return earthAge * 1.88 to determine age on Mars.", function() {
     let myAgeOnMars = new Galactic();
     myAgeOnMars.marsAgeCalc();
     expect(myAgeOnMars.marsAge).toEqual(62.04);
   });
   //Pass
   it("it should return earthAge * 11.86 to determine age on Jupiter.", function() {
     let myAgeOnJupiter = new Galactic();
     myAgeOnJupiter.jupiterAgeCalc();
     expect(myAgeOnJupiter.jupiterAge).toEqual(391.38);
   });
   //Life expectancy method tests
   //Pass
   it("it should return life expectancy on Mercury (.24 * 100 = 24).", function() {
     let myLEOnMercury = new Galactic();
     myLEOnMercury.mercuryLECalc();
     expect(myLEOnMercury.mercuryLE).toEqual(24);
   });
   //Pass
   it("it should return life expectancy on Venus(.62 * 100 = 62).", function() {
     let myLEOnVenus = new Galactic();
     myLEOnVenus.venusLECalc();
     expect(myLEOnVenus.venusLE).toEqual(62);
   });
   //Pass
   it("it should return life expectancy on Mars (1.88 * 100).", function() {
     let myLEOnMars = new Galactic();
     myLEOnMars.marsLECalc();
     expect(myLEOnMars.marsLE).toEqual(188);
   });
   //Pass
   it("it should return life expectancy on Jupiter (11.86 * 100).", function() {
     let myLEOnJupiter = new Galactic();
     myLEOnJupiter.jupiterLECalc();
     expect(myLEOnJupiter.jupiterLE).toEqual(1186);
   });

   //Years left tests
   //Pass
   it("it should return years of life left on Mercury.", function() {
     let myYLOnMercury = new Galactic();
     myYLOnMercury.mercuryAgeCalc();
     myYLOnMercury.mercuryLECalc();
     expect(myYLOnMercury.mercuryYL).toEqual(16.08);
   });
   //Pass
   it("it should return years of life left on Venus.", function() {
     let myYLOnVenus = new Galactic();
     myYLOnVenus.venusAgeCalc();
     myYLOnVenus.venusLECalc();
     expect(myYLOnVenus.venusYL).toEqual(41.54);
   });
   //Pass
   it("it should return years of life left on Mars.", function() {
     let myYLOnMars = new Galactic();
     myYLOnMars.marsAgeCalc();
     myYLOnMars.marsLECalc();
     expect(myYLOnMars.marsYL).toEqual(125.96);
   });
   //Pass
   it("it should return years of life left on Jupiter.", function() {
     let myYLOnJupiter = new Galactic();
     myYLOnJupiter.jupiterAgeCalc();
     myYLOnJupiter.jupiterLECalc();
     expect(myYLOnJupiter.jupiterYL).toEqual(794.62);
   });




   it("it should return with years-left message", function() {
     let myYLOnMercury = new Galactic();
     myYLOnMercury.mercuryAgeCalc();
     myYLOnMercury.mercuryLECalc();
     expect(myYLOnMercury.mercuryReturn).toEqual('You have ' + myYLOnMercury.mercuryYL + ' years left to live on Mercury.');
   });

 });
