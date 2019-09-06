 import { userAge } from './../src/galactic-calc.js';
 import { Galactic } from './../src/galactic-calc.js';

describe ('user input age valid', function() {

//Pass
  it ("it should respond as 'false' if syntax is incorrect", function() {
    let myAge = userAge("three");
    expect(myAge).toEqual(false);
  });

  //Pass
  it ("it should respond as 'true' if syntax is correct", function() {
    let myAge = userAge(33);
    expect(myAge).toEqual(true);
  });

  //Pass
  it ("it should return earthAge * 0.24 to determine age on Mercury", function() {
    let myAgeOnMercury = new Galactic();
    myAgeOnMercury.mercuryCalc();
    expect(myAgeOnMercury.mercuryAge).toEqual(7.92);
  });

//Pass
  it ("it should return earthAge * 0.62 to determine age on Venus", function() {
    let myAgeOnVenus = new Galactic();
    myAgeOnVenus.venusCalc();
    expect(myAgeOnVenus.venusAge).toEqual(20.46);
  });

  //Pass
  it ("it should return earthAge * 1.88 to determine age on Mars", function() {
    let myAgeOnMars = new Galactic();
    myAgeOnMars.marsCalc();
    expect(myAgeOnMars.marsAge).toEqual(62.04);
  });

  //Pass
  it ("it should return earthAge * 11.86 to determine age on Jupiter", function() {
    let myAgeOnJupiter = new Galactic();
    myAgeOnJupiter.jupiterCalc();
    expect(myAgeOnJupiter.jupiterAge).toEqual(391.38);
  });














});
