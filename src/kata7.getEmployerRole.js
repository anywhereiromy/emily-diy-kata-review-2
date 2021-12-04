const getEmployerRole = (employeeName, employees) => {
  const obj = employees.find(element => element.name === employeeName);
  return obj.role;
};

module.exports = getEmployerRole;
