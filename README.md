
# Note Taker
<hr>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

Application that creates and uses a database that stores information about a company(departments, roles, employees).

### Table of Contents

*[Usage](#usage)

*[Process](#process)

*[License](#license)

*[Contributing](#contributing)

*[Questions](#questions)


## Usage
 
To use the application, open and integrated terminal and run an npm install.
Run the below code to begin the program

```bash
node employeeTrack.js
```

## Process

### Create A Schema

First create a database and a table template that includes characteristics that may be necessary.
*The below code shows how this can be done*

```bash
CREATE DATABASE databasename;
USE databasename;

CREATE TABLE tablename
(
    ...
);
```

To deploy the schema, open it in a SQL Workbench and run it.


### Connect Employee-Tracker to Workbench

*Use the below code to connect the to workspaces*

```bash
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "database_name"
});

connection.connect(function (err) {
    if (err) throw err;
    runfunction();
});
```

### Prompt and Queries

By using Inquirer prompt, the program can obtain neccessay inputs to run certain functions.
Often the user inputs will be used for the query.
*Some examples for this are displayed below*

```bash
connection.query("INSERT INTO tableName (dataname1, dataname2, dataname3, dataname4) VALUES (?, ?, ?, ?)",[queryPrompt1,queryPrompt2,queryPrompt3,queryPrompt4]...);
```


## License

This Project is licensed under the MIT License

## Built With:
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JS)
* [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)


## Author(s):
**Brian Lee**
* [GitHub](https://github.com/brianjunhyuplee)
* [LinkedIn](https://www.linkedin.com/in/brian-lee-559208187/)


## Questions

If you have any questions about the repo, open an issue or contact me directly at [brianjunhyuplee@gmail.com](brianjunhyup@gmail.com). You can find more of my work at [brianjunhyuplee](https://github.com/brianjunhyuplee). <img src = "https://avatars3.githubusercontent.com/u/70872311?v=4" width = 20 alt = "github profile picture">
    