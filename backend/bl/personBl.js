// Import function from Person Model
import e from "express";
import { getPersons, getPersonById, getPersonByUsername, insertPerson, updatePersonById, deletePersonById } from "../dao/personDao.js";

// Get All Persons
export const showPersons = (req, res) => {
    getPersons((err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single Person 
export const showPersonById = (req, res) => {
    getPersonById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Login with username and password
export const login = (req, res) => {
    const data = req.body;
    getPersonByUsername(data.person_username, (err, results) => {
        if (err){
            res.send(err);
        } else {
            if (results == null) {
                //Send error message
                // devolver 400 con mensaje en json:
                res.status(400).json({ message: "User not found" });
            } else if (results.person_password == data.person_password) {
                res.json(results);
            } else {
                res.status(400).json({ message: "Password Incorrect" });
            }
        }
    });
}

// Create New Person
export const createPerson = (req, res) => {
    const data = req.body;
    insertPerson(data, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update Person
export const updatePerson = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePersonById(data, id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Delete Person
export const deletePerson = (req, res) => {
    const id = req.params.id;
    deletePersonById(id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
