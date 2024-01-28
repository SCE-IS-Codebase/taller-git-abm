<script setup>
    import LogIn from '../components/LogIn.vue'
    import SignUp from '../components/SignUp.vue'
</script>

<template>
    <main>
        <LogIn v-if="have_an_account" />
        <SignUp v-else />
        <div>
            <span v-if="!have_an_account">Have an account? </span>
            <span v-else>Don't have an account? </span>
            <button @click="have_an_account = !have_an_account">
                {{ have_an_account ? 'Sign Up' : 'Log In' }}
            </button>
        </div>
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


