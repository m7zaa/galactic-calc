 import { userAge } from './../src/galactic-calc.js';

describe ('user input age valid', function() {

  it ("it should respond as "undefined" if syntax is incorrect", function() {
    let myAge = userAge("three");
    expect(myAge).toEqual("false");
  });
















});
