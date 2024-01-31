import db from "../config/databaseaccess.js";

// Get All Tasks
export const getTasks = (result) => {
    db.query("SELECT * FROM task", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Task
export const getTaskById = (id, result) => {
    db.query("SELECT * FROM task WHERE task_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Get Tasks by Person ID
export const getTasksByPersonId = (id, result) => {
    db.query("SELECT task.*, tag.tag_name FROM task INNER JOIN tag ON task.tag_id = tag.tag_id WHERE tag.person_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Insert Task to Database
export const insertTask = (data, result) => {
    db.query("INSERT INTO task (task_due_date, task_description, tag_id, person_id) VALUES (?, ?, ?, ?)", [data.task_due_date, data.task_description, data.tag_id, data.person_id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Task in Database
export const updateTaskById = (data, id, result) => {
    db.query("UPDATE task SET task_due_date = ?, task_description = ?, tag_id = ?, person_id = ? WHERE task_id = ?", [data.task_due_date, data.task_description, data.tag_id, data.person_id, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Task from Database
export const deleteTaskById = (id, result) => {
    db.query("DELETE FROM task WHERE task_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
