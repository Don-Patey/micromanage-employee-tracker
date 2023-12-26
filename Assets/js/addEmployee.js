const inquirer = require("inquirer");

async function addEmployeePrompts(role, manager) {
    const { firstName, lastName } = await inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?",
            validate: function (input) {
                if (input === "") {
                    return "Please enter a first name.";
                }
                return true;
            },
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?",
            validate: function (input) {
                if (input === "") {
                    return "Please enter a last name.";
                }
                return true;
            },
        },
    ]);

    const { roleId } = await inquirer.prompt([
        {
            type: "list",
            name: "roleId",
            message: "What is the employee's role?",
            choices: role,
        },
    ]);

    const { managerId } = await inquirer.prompt([
        {
            type: "list",
            name: "managerId",
            message: "Who is the employee's manager?",
            choices: manager,
        },
    ]);

    return { firstName, lastName, roleId, managerId };
}

module.exports = addEmployeePrompts;