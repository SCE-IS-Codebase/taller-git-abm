-- Create Database
CREATE DATABASE IF NOT EXISTS todolist_db;
USE todolist_db;

-- Create person Table
CREATE TABLE IF NOT EXISTS person (
    person_id INT PRIMARY KEY AUTO_INCREMENT,
    person_username VARCHAR(50) NOT NULL,
    person_password VARCHAR(50) NOT NULL
);

-- Create Tag Table
CREATE TABLE IF NOT EXISTS tag (
    tag_id INT PRIMARY KEY AUTO_INCREMENT,
    tag_name VARCHAR(50) NOT NULL,
    person_id INT,
    FOREIGN KEY (owner) REFERENCES person(person_id)
);

-- Create Task Table
CREATE TABLE IF NOT EXISTS task (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    task_due_date DATE NOT NULL,
    task_description TEXT NOT NULL,
    tag_id INT,
    person_id INT,
    FOREIGN KEY (tag_id) REFERENCES tag(tag_id),
    FOREIGN KEY (owner) REFERENCES person(person_id)
);
