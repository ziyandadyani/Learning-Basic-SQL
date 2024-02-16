// Assuming you have set up your database connection

// Execute an SQL query to retrieve data from the employees table
const query = "SELECT * FROM employees WHERE department = ?";
const department = "IT";

db.query(query, [department], (err, results) => {
  if (err) {
    console.error("Error executing query:", err);
    return;
  }

  // Process the results
  if (results.length > 0) {
    console.log(`Employees in the ${department} department:`);
    results.forEach((employee) => {
      console.log(`ID: ${employee.id}, Name: ${employee.name}, Salary: ${employee.salary}`);
    });
  } else {
    console.log(`No employees found in the ${department} department.`);
  }
});
