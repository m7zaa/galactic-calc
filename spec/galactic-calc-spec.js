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


  it ("it should return earthAge * 0.24 to determine age on Mercury", function() {
    let myAgeOnMercury = new Galactic();
    myAgeOnMercury.mercuryCalc();
    expect(myAgeOnMercury.mercuryAge).toEqual(7.92);
  });



  // it ("it should return age*0.62 to calculate age on Venus", function() {
  //   let myAgeVenus = venusAge(33);
  //   expect(myAgeVenus).toEqual(20.46);
  // });
  //
  // it ("it should return age*1.88 to calculate age on Mars", function() {
  //   let myAgeMars = marsAge(33);
  //   expect(myAgeMars).toEqual(62.04);
  // });
  //
  // it ("it should return age*11.86 to calculate age on Jupiter", function() {
  //   let myAgeJupiter = JupiterAge(33);
  //   expect(myAgeJupiter).toEqual(391.38);
  // });









});
