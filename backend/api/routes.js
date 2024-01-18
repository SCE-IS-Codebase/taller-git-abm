import express from "express";

import { showPersons, showPersonById, login, createPerson, updatePerson, deletePerson } from "../bl/personBl.js";
import { showTasks, showTaskById, showTasksByPersonId, createTask, updateTask, deleteTask } from "../bl/taskBl.js";
import { showTags, showTagById, showTagsByPersonId, createTag, updateTag, deleteTag } from "../bl/tagBl.js";

const router = express.Router();

// Person Routes
router.get("/persons", showPersons);
router.get("/persons/:id", showPersonById);
router.post("/persons", createPerson);
router.post("/persons/login", login);
router.put("/persons/:id", updatePerson);
router.delete("/persons/:id", deletePerson);

// Task Routes
router.get("/tasks", showTasks);
router.get("/tasks/:id", showTaskById);
router.get("/tasks/person/:id", showTasksByPersonId);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

// Tag Routes
router.get("/tags", showTags);
router.get("/tags/:id", showTagById);
router.get("/tags/person/:id", showTagsByPersonId);
router.post("/tags", createTag);
router.put("/tags/:id", updateTag);
router.delete("/tags/:id", deleteTag);

export default router;
