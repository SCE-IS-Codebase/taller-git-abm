<script setup>
    import LogIn from '../components/LogIn.vue'
    import SignUp from '../components/SignUp.vue'
</script>

<template>
    <main class="container">
        <LogIn v-if="have_an_account" />
        <SignUp v-else />
        <div class="text-light">
            <span v-if="!have_an_account">Have an account? </span>
            <span v-else>Don't have an account? </span>
            <button @click="have_an_account = !have_an_account" class="btn btn-light">
                {{ have_an_account ? 'Sign Up' : 'Log In' }}
            </button>
        </div>
        <footer class="mt-5">
            <p class="text-center text-light">© 2024 Taller de Software. Hecho con ❤️ para futuros desarrolladores.</p>
        </footer>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                have_an_account: true
            }
        }
    }
</script>

