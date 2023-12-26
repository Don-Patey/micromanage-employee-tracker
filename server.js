const express = require('express');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const db = require('./db/db.js');
const mainMenuPrompts = require('./index');
require('dotenv').config();

const app = express();

// Start the application
async function startApplication() {
  console.log("Welcome to the Employee Tracker!");
  try {
    const choice = await mainMenuPrompts();
    handleUserChoice(choice);
  } catch (error) {
    console.error('Error in mainMenuPrompts:', error);
  }
}

// Handle user choice from the main menu
function handleUserChoice(choice) {
  switch (choice) {
    case 'VIEW_EMPLOYEES':
      viewAllEmployees();
      break;
    case 'VIEW_EMPLOYEES_BY_DEPARTMENT':
      viewAllEmployeesByDepartment();
      break;
    // Add cases for other choices...
    case 'QUIT':
      // Handle quit logic
      console.log('Exiting the Employee Tracker application.');
      process.exit();
      break;
    default:
      console.log('Invalid choice. Please choose a valid option.');
      startApplication(); // Continue with the application after handling the choice
      break;
  }
}

// View all employees
function viewAllEmployees() {
  console.log("Viewing all employees\n");

  const query =
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;";

  db.query(query, function (err, res) {
    if (err) {
      console.error('Error querying the database:', err);
      startApplication();
      return;
    }

    console.table(res);
    startApplication(); // Continue with the application after viewing employees
  });
}

// View all employees by department
function viewAllEmployeesByDepartment() {
  console.log("Viewing all employees by department\n");

  const query = "SELECT * FROM department";

  db.query(query, function (err, res) {
    if (err) {
      console.error('Error querying the database:', err);
      startApplication();
      return;
    }

    console.table(res);
    startApplication(); // Continue with the application after viewing departments
  });
}


// Initialize your application
startApplication();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
