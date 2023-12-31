const inquirer = require("inquirer");

async function mainMenuPrompts() {
    console.log("Welcome to the Employee Tracker!");

    debugger;

    const { choice } = await inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            {
                name: "View All Employees",
                value: "VIEW_EMPLOYEES",
            },
            {
                name: "View All Employees By Department",
                value: "VIEW_EMPLOYEES_BY_DEPARTMENT",
            },
           
            {
                name: "Add Employee",
                value: "ADD_EMPLOYEE",
            },
            {
                name: "Remove Employee",
                value: "REMOVE_EMPLOYEE",
            },
            {
                name: "Update Employee Role",
                value: "UPDATE_EMPLOYEE_ROLE",
            },
            {
                name: "View All Roles",
                value: "VIEW_ROLE",
            },
            {
                name: "Add Role",
                value: "ADD_ROLE",
            },
            {
                name: "Remove Role",
                value: "REMOVE_ROLE",
            },
            {
                name: "View All Departments",
                value: "VIEW_DEPARTMENT",
            },
            {
                name: "Add Department",
                value: "ADD_DEPARTMENT",
            },
            {
                name: "Remove Department",
                value: "REMOVE_DEPARTMENT",
            },
            {
                name: "Quit",
                value: "QUIT",
            },
        ],
    });

    // Corrected the variable name
    const userChoice = choice;
    return userChoice;
}

module.exports = mainMenuPrompts;
