<template>
    <main>
        <h1>Sign In</h1>
        <form @submit.prevent="signIn" class="mt-4">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" id="username" v-model="form_username" class="form-control" required />
            </div>
        
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" v-model="form_password" class="form-control" required />
            </div>
        
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" id="confirmPassword" v-model="form_confirmPassword" class="form-control" required />
            </div>
        
            <button class="btn btn-light" type="submit">Sign In</button>
        </form>
    </main>
</template>

<script>
    import LoginService from '../services/LoginService.js'
    export default {
        data() {
            return {
                form_username: '',
                form_password: '',
                form_confirmPassword: ''
            }
        },
        created() {
            this.loginService = new LoginService();
        },
        methods: {
            signIn() {
                if (this.form_password != this.form_confirmPassword) {
                    alert('Passwords do not match')
                    return
                }
                this.loginService.signUp({
                        "person_username": this.form_username,
                        "person_password": this.form_password
                    })
                    .then(() => {
                        alert('Signed up successfully')
                        this.$router.push({ name: 'home' })
                    })
                    .catch(error => {
                        console.log(error)
                        alert('Error during sign up\n'+error.response.data.message+'\n'+error.response.data.details[0].message)
                    })
                    
            }
        }
    }
</script>