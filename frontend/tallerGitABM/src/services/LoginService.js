import axios from 'axios';

export default class LoginService {
    constructor() {
        this.url = "http://localhost:8000/api/persons";
    }
    async login(loginRequest) {
        try {
            const response = await axios.post(this.url+'/login', loginRequest);
            console.log(response.data);
            // if response.data has person_id, then login was successful, else throw error
            if (response.data.person_id) {
                // Store person_id in localStorage
                localStorage.setItem('person_id', response.data.person_id);
                return response.data;
            } else {
                throw new Error(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    async signUp(createPersonRequest) {
        try {
            const response = await axios.post(this.url, createPersonRequest);
            console.log(response.data);
            return await this.login({
                person_username: createPersonRequest.person_username,
                person_password: createPersonRequest.person_password
            });
        } catch (error) {
            console.log(error);
        }
    }
}