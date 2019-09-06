 import { userAge } from './../src/galactic-calc.js';

describe ('user input age valid', function() {

  it ("it should respond as 'false' if syntax is incorrect", function() {
    let myAge = userAge("three");
    expect(myAge).toEqual(false);
  });
  it ("it should respond as 'true' if syntax is correct", function() {
    let myAge = userAge(33);
    expect(myAge).toEqual(true);
  });















});
