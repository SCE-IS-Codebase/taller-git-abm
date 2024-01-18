// Import function from Tag Model
import { getTags, getTagById, getTagsByPersonId, insertTag, updateTagById, deleteTagById } from "../dao/tagDao.js";

// Get All Tags
export const showTags = (req, res) => {
    getTags((err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single Tag 
export const showTagById = (req, res) => {
    getTagById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Tags by Person ID
export const showTagsByPersonId = (req, res) => {
    getTagsByPersonId(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Create New Tag
export const createTag = (req, res) => {
    const data = req.body;
    insertTag(data, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update Tag
export const updateTag = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateTagById(data, id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Delete Tag
export const deleteTag = (req, res) => {
    const id = req.params.id;
    deleteTagById(id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
