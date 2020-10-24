function isPerfect(num) {
  var temp = 0;
  for (var i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }

  if (temp == num && temp !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}
isPerfect(12);
