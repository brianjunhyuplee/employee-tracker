var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Asianking247",
    database: "employeesDB"
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
            message: "What would you like to add?",
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
            message: "What would you like to add?",
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
            var insert = "INSERT INTO departments (department_name) VALUES ?";
            connection.query(insert, {department_name : answer.name}, function (err, res) {
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
            var insert = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";
            var query = "SELECT id FROM departments WHERE ?";
            var depID = 0;
            connection.query(query, {department_name: answer.department} , function(err,res){
                if (err) {throw err;}
                console.log(JSON.stringify(res[0].id));
                depID = parseInt(JSON.stringify(res[0].id));
                connection.query(insert, [answer.title, answer.salary , depID], function (err, res) {
                    if (err) {throw err;}
                    console.log("Added role!");
                    editTables();
                });
            });
        })
}

function addEmployees() {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the first name of this employee?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the last name of this employee?"
            },
            {
                name: "role",
                type: "input",
                message: "What is this employee's role?"
            }
        ]).then(function (answer) {
            var insert = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
            var query = "SELECT id FROM roles WHERE ?";
            var role_id;
            connection.query(query, {title : answer.role} , function(err,res){
                if (err) {throw err;}
                console.log(parseInt(JSON.stringify(res[0].id)));
                role_id = parseInt(JSON.parse(res[0].id));
                connection.query(insert, [answer.first_name, answer.last_name , role_id, 0], function (error, response) {
                    if (error) {throw err;}
                    console.log("Added role!");
                    editTables();
                });
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
            var query = "SELECT * FROM "+ answer.view;
            connection.query(query, function (err, res) {
                if (err) {throw err;}
                console.table(res);
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



