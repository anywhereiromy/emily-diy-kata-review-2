const humanCatDogYears = number => {
  let catYear = number;
  let dogYear = number;
  if (number === 1) {
    catYear = number + 14;
    dogYear = number + 14;
  }

  if (number === 2) {
    catYear = 15 + 9;
    dogYear = 15 + 9;
  }

  if (number >= 3) {
    catYear = 24 + (number - 2) * 4;
    dogYear = 24 + (number - 2) * 5;
  }
  return [number, catYear, dogYear];
};

module.exports = humanCatDogYears;
