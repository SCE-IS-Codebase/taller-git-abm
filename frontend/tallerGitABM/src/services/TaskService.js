import axios from "axios";

export default class TaskService {
    constructor() {
        this.url = "http://localhost:8000/api/tasks";
        this.user_id = localStorage.getItem('person_id');
    }
    async getAllTasksByUserId() {
        try {
            const response = await axios.get(this.url+'/person/'+this.user_id);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async createTask(createTaskRequest) {
        try {
            const response = await axios.post(this.url, createTaskRequest);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async updateTask(task_id, updateTaskRequest) {
        try {
            const response = await axios.put(this.url+'/'+task_id, updateTaskRequest);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteTask(task_id) {
        try {
            const response = await axios.delete(this.url+'/'+task_id);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async getTaskById(task_id) {
        try {
            const response = await axios.get(this.url+'/'+task_id);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}