const numberToReversedDigits = number => {
  const myArray = Array.from(number.toString()).map(Number);
  return myArray.reverse();
};

module.exports = numberToReversedDigits;
