DROP DATABASE IF EXISTS employeesDB;
CREATE database employeesDB;

USE employeesDB;

CREATE TABLE department (
  id INT NULL,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee_role (
  id INT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);