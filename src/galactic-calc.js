// Back-end

export function userAge(input) {
  if (input > 0 && input<1000000 || input=== NaN) {
        return true;
    } else {
      return false;
    }
}
