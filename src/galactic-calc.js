// Back-end

 function userAge(input) {
  if (input > 0 && input<1000000 || input=== NaN) {
        return true;
    } else {
      return false;
    }
};





class Galactic {
constructor() {
  this.age = 33;
  this.mercuryAge = []
  }
  mercuryCalc() {
    this.mercuryAge = this.age * .24;
  }
};
