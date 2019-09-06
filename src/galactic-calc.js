// Back-end

 export function userAge(input) {
  if (input === NaN) {
        return false;
    } else {
      return true;
    }
};


export class Galactic {
constructor(age) {
  this.earthAge = age;
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

//years-left
  this.mercuryReturn = [];
  this.venusReturn = [];
  this.marsReturn = [];
  this.jupiterReturn = [];


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
    if (this.mercuryYL < 0) {
      this.mercuryReturn = ('You have exceded your life expectancy by ' + Math.abs(this.mercuryYL) + ' years. Congratulations!!');
    } else {
      this.mercuryReturn = ('You have ' + this.mercuryYL + ' years left on to live Mercury.')
    };
  }
  venusLECalc() {
    this.venusLE = (.62 * this.earthLifeExpectancy);
    this.venusYL = (this.venusLE - this.venusAge);
    if (this.venusYL < 0) {
      this.venusReturn = ('You have exceded your life expectancy by ' + Math.abs(this.venusYL) + ' years. Congratulations!!')
    } else {
      this.venusReturn = ('You have ' + this.venusYL + ' years left to live on Venus.')
    };
  }
  marsLECalc() {
    this.marsLE = (1.88 * this.earthLifeExpectancy);
    // I found this workaround on stackoverflow. toFixed(2) was returns a string and I couldn't have that!
    this.marsYL = Math.round((this.marsLE - this.marsAge) * 1e2) / 1e2;
    if (this.marsYL < 0) {
      this.marsReturn = ('You have exceded your life expectancy by ' + Math.abs(this.marsYL) + ' years. Congratulations!!')
    } else {
      this.marsReturn = ('You have ' + this.marsYL + ' years left to live on Mars.')
    };

  }
  jupiterLECalc() {
    this.jupiterLE = (11.86 * this.earthLifeExpectancy);
    this.jupiterYL = (this.jupiterLE - this.jupiterAge);
    if (this.jupiterYL < 0) {
      this.jupiterReturn = ('You have exceded your life expectancy by ' + Math.abs(this.jupiterYL) + ' years. Congratulations!!')
    } else {
      this.jupiterReturn = ('You have ' + this.jupiterYL + ' years left to live on Jupiter.')
    };
  };
};
