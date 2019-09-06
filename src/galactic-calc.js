// Back-end

 export function userAge(input) {
  if (input > 0 && input<1000000 || input=== NaN) {
        return true;
    } else {
      return false;
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

  this.mercuryLE = [];
  this.venusLE = [];
  this.marsLE = [];
  this.jupiterLE = [];

  }

  mercuryCalc() {
    this.mercuryAge = this.earthAge * .24;
  }

  venusCalc() {
    this.venusAge = this.earthAge * .62;
  }

  marsCalc() {
    this.marsAge = this.earthAge * 1.88;
  }

  jupiterCalc() {
    this.jupiterAge = this.earthAge * 11.86;
  }





  mercuryLECalc() {
    this.mercuryLE = this.mercuryAge * (.24 * this.earthLifeExpectancy);
  }

  venusLECalc() {
    this.venusLE = this.venusAge * (.62 * this.earthLifeExpectancy);
  }

  marsLECalc() {
    this.marsLE = this.marsAge * (1.88 * this.earthLifeExpectancy);
  }

  jupiterLECalc() {
    this.jupiterLE = this.jupiterAge * (11.86 * this.earthLifeExpectancy);
  }







};
