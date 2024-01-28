<template>
    <main>
        <h1>Sign In</h1>
        <form @submit.prevent="signIn">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="form_username" required>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="form_password" required>
            <button type="submit">Sign In</button>
        </form>
    </main>
</template>

<script>
    import LoginService from '../services/LoginService.js'
    export default {
        data() {
            return {
                form_username: '',
                form_password: ''
            }
        },
        created() {
            this.loginService = new LoginService();
        },
        methods: {
            signIn() {
                this.loginService.login({
                        "person_username": this.form_username,
                        "person_password": this.form_password
                    })
                    .then(() => {
                        alert('Logged in successfully')
                        this.$router.push({ name: 'home' })
                    })
                    .catch(error => {
                        console.log(error)
                        alert('Invalid username or password')
                    })
                    
            }
        }
    }
</script>