const booleanToWord = boolean => {
  return boolean ? "Yes" : "No";
  // Old code > if (boolean === true) {
  // return "Yes";
  // }
  // if (boolean === false) {
  // return "No";
  // }
};

module.exports = booleanToWord;
