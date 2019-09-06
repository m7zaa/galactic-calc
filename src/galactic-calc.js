// Back-end

 export function userAge(input) {
  if (input === NaN) {
        return false;
    } else {
      return true;
    }
};


export class Galactic {
constructor() {
  this.earthAge = 33;
  this.earthLifeExpectancy = 100;

  this.mercuryAge = [];
  this.venusAge = [];
  this.marsAge = [];
  this.jupiterAge = [];

//life expectancies
  this.mercuryLE = [];
  this.venusLE = [];
  this.marsLE = [];
  this.jupiterLE = [];

//years-left
  this.mercuryYL = [];
  this.venusYL = [];
  this.marsYL = [];
  this.jupiterYL = [];

  }

  mercuryAgeCalc() {
    this.mercuryAge = this.earthAge * .24;
  }
  venusAgeCalc() {
    this.venusAge = this.earthAge * .62;
  }
  marsAgeCalc() {
    this.marsAge = this.earthAge * 1.88;
  }
  jupiterAgeCalc() {
    this.jupiterAge = this.earthAge * 11.86;
  }

  mercuryLECalc() {
    this.mercuryLE = (.24 * this.earthLifeExpectancy);
    this.mercuryYL = (this.mercuryLE - this.mercuryAge);
  }
  venusLECalc() {
    this.venusLE = (.62 * this.earthLifeExpectancy);
    this.venusYL = (this.venusLE - this.venusAge);
  }
  marsLECalc() {
    this.marsLE = (1.88 * this.earthLifeExpectancy);
    // I found this workaround on stackoverflow. toFixed(2) was returns a string and I couldn't have that!
    this.marsYL = Math.round((this.marsLE - this.marsAge) * 1e2) / 1e2;
  }
  jupiterLECalc() {
    this.jupiterLE = (11.86 * this.earthLifeExpectancy);
    this.jupiterYL = (this.jupiterLE - this.jupiterAge);
  }





  // mercuryYLCalc() {
  //   this.mercuryYL = (this.mercuryLE) - (this.mercuryAge);
  //
  // }





};
