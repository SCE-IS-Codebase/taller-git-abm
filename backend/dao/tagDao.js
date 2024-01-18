import db from "../config/databaseaccess.js";

// Get All Tags
export const getTags = (result) => {
    db.query("SELECT * FROM tag", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Tag
export const getTagById = (id, result) => {
    db.query("SELECT * FROM tag WHERE tag_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Get Tags by Person ID
export const getTagsByPersonId = (id, result) => {
    db.query("SELECT * FROM tag WHERE person_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Insert Tag to Database
export const insertTag = (data, result) => {
    db.query("INSERT INTO tag (tag_name, person_id) VALUES (?, ?)", [data.tag_name, data.person_id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Tag in Database
export const updateTagById = (data, id, result) => {
    db.query("UPDATE tag SET tag_name = ?, person_id = ? WHERE tag_id = ?", [data.tag_name, data.person_id, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Tag from Database
export const deleteTagById = (id, result) => {
    db.query("DELETE FROM tag WHERE tag_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
