var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");
var conection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "top_songsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    editTables();
});

function editTables() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Add Departments, Roles, or Employees",
                "View Departments, Roles, or Employees",
                "Update Employee Roles",
                "Exit Program"
            ]
        }).then(function (answer) {
            switch (answer.action) {
                case "Add Departments, Roles, or Employees":
                    promptAdd();
                    break;
                case "View Departments, Roles, or Employees":
                    promptView();
                    break;
                case "Update Employee Roles":
                    promptUpdate();
                    break;
                case "Exit Program":
                    break;
            }
        })

}

function promptAdd() {
    inquirer
        .prompt({
            name: "add",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "departments",
                "roles",
                "employees"
            ]
        }).then(function (answer) {
            if (answer.add === "departments") {
                addDepartments();
            }
            else if (answer.add === "roles") {
                addRoles();
            }
            else if (answer.add === "employees") {
                addEmployees();
            }
        })
}

function addDepartments() {
    inquirer
        .prompt({
            name: "name",
            type: "input",
            message: "What is the name of the Department?"
        }).then(function (answer) {
            var ranId = Math.floor((Math.random() + 1) * 10000);
            var insert = "INSERT INTO departments VALUES (?,?)";
            connection.query(insert, [ranId, answer.name], function (err, res) {
                console.log("Added Department!");
                editTables();
            })
        })
}

function addRoles() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title of this role?"
            },
            {
                name: "salary",
                type: "number",
                message: "What is the salary of this role?"
            },
            {
                name: "department",
                type: "input",
                message: "Which department do you want to add it to?"
            }
        ]).then(function (answer) {
            var ranId = Math.floor((Math.random() + 1) * 10000);
            var insert = "INSERT INTO roles VALUES (?,?,?,?)";
            var query = "SELECT departments.id FROM departments WHERE ?";
            var depID = 0;
            connection.query(query, department, function(err,res){
                depID = res;
            });
            connection.query(insert, [ranId, answer.title, answer.salary, depID], function (err, res) {
                console.log("Added Department!");
                editTables();
            });
        })
}

function promptView() {
    inquirer
        .prompt({
            name: "view",
            type: "rawlist",
            message: "What would you like to view?",
            choices: [
                "departments",
                "roles",
                "employees"
            ]
        }).then(function (answer) {
            var query = "SELECT * FROM ?";
            connection.query(query, answer.view, function (err, res) {
                console.log(res);
                editTables();
            })
        })
}

function promptUpdate() {
    inquirer
        .prompt({
            name: "update",
            type: "rawlist",
            message: "What would you like to update?",
            choices: [
                "department",
                "roles",
                "employees"
            ]
        })
}