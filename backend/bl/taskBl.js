// Import function from Task Model
import { getTasks, getTaskById, getTasksByPersonId, insertTask, updateTaskById, deleteTaskById } from "../dao/taskDao.js";
import { getTagById } from "../dao/tagDao.js";

// Get All Tasks
export const showTasks = (req, res) => {
    getTasks((err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single Task 
export const showTaskById = (req, res) => {
    getTaskById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Tasks by Person ID
export const showTasksByPersonId = (req, res) => {
    getTasksByPersonId(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            // format date in "yyyy-MM-dd" style
            results.forEach(task => {
                task.task_due_date = task.task_due_date.toISOString().slice(0, 10);
            });
            res.json(results);
        }
    });
}

// Create New Task
export const createTask = (req, res) => {
    const data = req.body;
    insertTask(data, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update Task
export const updateTask = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateTaskById(data, id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Delete Task
export const deleteTask = (req, res) => {
    const id = req.params.id;
    deleteTaskById(id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
