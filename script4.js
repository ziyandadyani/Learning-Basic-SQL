const sqlite3 = require("sqlite3").verbose();

// Create a new database in memory
let db = new sqlite3.Database(":memory:");

// Create departments table
db.serialize(function () {
  db.run(
    "CREATE TABLE departments (department_id INT PRIMARY KEY, department_name VARCHAR(50) NOT NULL)"
  );
  // Populate departments table with sample data
  let departmentsData = [
    { department_id: 1, department_name: "Engineering" },
    { department_id: 2, department_name: "Marketing" },
    { department_id: 3, department_name: "Finance" },
  ];
  let departmentsStmt = db.prepare(
    "INSERT INTO departments (department_id, department_name) VALUES (?, ?)"
  );
  departmentsData.forEach((data) =>
    departmentsStmt.run(data.department_id, data.department_name)
  );
  departmentsStmt.finalize();

  // Create employees table
  db.run(
    "CREATE TABLE employees (employee_id INT PRIMARY KEY, employee_name VARCHAR(50) NOT NULL, department_id INT, FOREIGN KEY (department_id) REFERENCES departments(department_id))"
  );
  // Populate employees table with sample data
  let employeesData = [
    { employee_id: 1, employee_name: "John Doe", department_id: 1 },
    { employee_id: 2, employee_name: "Jane Smith", department_id: 2 },
    { employee_id: 3, employee_name: "Bob Johnson", department_id: 1 },
    { employee_id: 4, employee_name: "Alice Williams", department_id: 3 },
  ];
  let employeesStmt = db.prepare(
    "INSERT INTO employees (employee_id, employee_name, department_id) VALUES (?, ?, ?)"
  );
  employeesData.forEach((data) =>
    employeesStmt.run(data.employee_id, data.employee_name, data.department_id)
  );
  employeesStmt.finalize();

  // Example query: Retrieve the names of all employees along with the names of their departments
  db.each(
    "SELECT e.employee_name, d.department_name FROM employees e JOIN departments d ON e.department_id = d.department_id",
    function (err, row) {
      console.log(row.employee_name + " works in " + row.department_name);
    }
  );
});

// Close the database connection
db.close();
