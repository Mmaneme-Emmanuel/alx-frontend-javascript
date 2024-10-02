export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,  // Spread syntax to copy employeesList
    },
    getNumberOfDepartments() {  // ES6 method property, no parameter needed
      return Object.keys(employeesList).length;  // Use employeesList from outer scope
    },
  };
}
