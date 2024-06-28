const fs = require("fs");
const Employee = require("./employee");

let employees = [];

const loadDatabase = () => {
  try {
    employees = JSON.parse(fs.readFileSync("./employees.json"));
  } catch (error) {
    employees = [];
  }
};

const writeDatabase = () => {
  fs.writeFileSync("./employees.json", JSON.stringify(employees));
};

const getEmployees = () => {
  loadDatabase();
  return employees;
};

const getEmployeeById = (id) => {
  loadDatabase();
  return employees.find((employee) => employee.id === id);
};

const addEmployee = (
  fullName,
  position,
  email,
  phone,
  leaveDays,
  dateOfAdmission,
  supervisor,
  image
) => {
  loadDatabase();
  const newEmployee = new Employee(
    fullName,
    position,
    email,
    phone,
    leaveDays,
    dateOfAdmission,
    supervisor,
    image
  );
  employees.push(newEmployee);
  writeDatabase();
  return newEmployee;
};

const updateEmployee = (
  id,
  fullName,
  position,
  email,
  phone,
  leaveDays,
  dateOfAdmission,
  supervisor,
  image
) => {
  loadDatabase();
  const employeeIndex = employees.findIndex((employee) => employee.id === id);
  if (employeeIndex < 0) return;
  const updatedEmployee = new Employee(
    fullName,
    position,
    email,
    phone,
    leaveDays,
    dateOfAdmission,
    supervisor,
    image
  );
  employees[employeeIndex] = updatedEmployee;
  writeDatabase();
  return updatedEmployee;
};

const deleteEmployee = (id) => {
  loadDatabase();
  const employeeIndex = employees.findIndex((employee) => employee.id === id);
  if (employeeIndex < 0) return;
  const deletedEmployee = employees[employeeIndex];
  employees = employees.filter((employee) => employee.id !== id);
  writeDatabase();
  return deletedEmployee;
};

module.exports = {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
