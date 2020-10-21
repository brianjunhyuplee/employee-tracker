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

  connection.connect(function(err) {
    if (err) throw err;
    editTables();
  });

  function editTables(){
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add Departments, Roles, or Employees",
        "View Departments, Roles, or Employees",
        "Find data within a specific range",
        "Update Employee Roles"
      ],
      name: "add",
      type: "list",
      message: "What would you like to add?"
      choices: [
        "Department",
        "Roles",
        "Employees"
      ]

    })


}