const joinNames = namesObj => {
  const nameArray = namesObj.map(element => element.name);
  const lastName = nameArray.pop();
  const otherNames = nameArray.join(", ");

return otherNames.concat(` & ${lastName}`);
};

module.exports = joinNames;
