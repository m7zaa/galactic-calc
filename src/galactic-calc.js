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
  this.mercuryAge = [];
  this.venusAge = [];
  this.marsAge = [];
  this.jupiterAge = [];
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

};
