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
                "Department",
                "Roles",
                "Employees"
            ]
        })
}

function promptView() {
    inquirer
        .prompt({
            name: "view",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Departments",
                "Roles",
                "Employees"
            ]
        }).then(function(answer){
            var query = "SELECT * FROM ?"
            connection.query(query, answer.view , function(err,res){
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
            message: "What would you like to do?",
            choices: [
                "Department",
                "Roles",
                "Employees"
            ]
        })
}