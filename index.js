// Write your solution in this file!
// Define an initial employee object
const employee = {
    name: "Sam",
  };
  
  // Non-destructive update: returns a new object with the updated key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Creates a clone and adds/updates the key
  }
  
  // Destructive update: modifies the original object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Non-destructive delete: returns a new object without the specified key
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Clone the object
    delete newEmployee[key]; // Remove the key from the clone
    return newEmployee;
  }
  
  // Destructive delete: modifies the original object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Exporting for testing purposes (if needed in Node.js)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      employee,
      updateEmployeeWithKeyAndValue,
      destructivelyUpdateEmployeeWithKeyAndValue,
      deleteFromEmployeeByKey,
      destructivelyDeleteFromEmployeeByKey,
    };
  }
  