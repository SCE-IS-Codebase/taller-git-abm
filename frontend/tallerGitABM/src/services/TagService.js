import axios from "axios";

export default class TagService {
    constructor() {
        this.url = "http://localhost:8000/api/tags";
        this.user_id = localStorage.getItem('person_id');
    }
    async getAllTagsByUserId() {
        try {
            const response = await axios.get(this.url+'/person/'+this.user_id);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async createTag(createTagRequest) {
        try {
            const response = await axios.post(this.url, createTagRequest);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async updateTag(tag_id, updateTagRequest) {
        try {
            const response = await axios.put(this.url+'/'+tag_id, updateTagRequest);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteTag(tag_id) {
        try {
            const response = await axios.delete(this.url+'/'+tag_id);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async getTagById(tag_id) {
        try {
            const response = await axios.get(this.url+'/'+tag_id);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}