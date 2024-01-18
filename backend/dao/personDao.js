import db from "../config/databaseaccess.js"

// Get All Persons
export const getPersons = (result) => {
    db.query("SELECT * FROM person", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Person
export const getPersonById = (id, result) => {
    db.query("SELECT * FROM person WHERE person_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Get Person by Username
export const getPersonByUsername = (username, result) => {
    db.query("SELECT * FROM person WHERE person_username = ?", [username], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Person to Database
export const insertPerson = (data, result) => {
    db.query("INSERT INTO person (person_username, person_password) VALUES (?, ?)", [data.person_username, data.person_password], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Person in Database
export const updatePersonById = (data, id, result) => {
    db.query("UPDATE person SET person_username = ?, person_password = ? WHERE person_id = ?", [data.person_username, data.person_password, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Person from Database
export const deletePersonById = (id, result) => {
    db.query("DELETE FROM person WHERE person_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
