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
  };
};






function yearsLeft () {
  if (this.mercuryYL<0) {
    console.log("You have exceded your life expectancy by " + this.mercuryYL + " years.")
} else {
  console.log("You have " + this.mercuryYL + " years left on Mercury.")
};
// if (this.venusYL<0) {
//   "You have exceded your life expectancy by" Math.abs(${this.venusYL}) "years."
// } else {
// "You have ${this.venusYL} years left on Venus."
// };
// if (this.marsYL<0) {
//   "You have exceded your life expectancy by" Math.abs(${this.marsYL}) "years."
// } else {
// "You have ${this.marsYL} years left on Mars."
// };
// if (this.jupiterYL<0) {
//   "You have exceded your life expectancy by" Math.abs(${this.jupiterYL}) "years."
// } else {
// "You have ${this.jupiterYL} years left on Jupiter."
// };
};
