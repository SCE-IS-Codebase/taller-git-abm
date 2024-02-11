<script setup>
import { ref, watchEffect } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

let isLoggedIn = ref(localStorage.getItem('person_id') ? true : false);
let loginText = ref(isLoggedIn.value ? 'Log Out' : 'Log In');

const handleLoginClick = () => {
  if (isLoggedIn.value) {
    localStorage.removeItem('person_id');
    isLoggedIn.value = false;
    loginText.value = 'Log In';
  }
}

watchEffect(() => {
  isLoggedIn.value = localStorage.getItem('person_id') ? true : false;
  loginText.value = isLoggedIn.value ? 'Log Out' : 'Log In';
});
</script>

<template>
  <div id="app">
    <!-- Bootstrap Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/SCE-taller.png" alt="SCE logo" width="80" class="d-inline-block align-text-top">
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link green" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link green" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link green" to="/tag">Tags</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link green" to="/task">Tasks</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link green" to="/login" @click="handleLoginClick">{{ loginText }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main content area -->
    <main class="flex-grow-1 p-3">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginText: 'Login',
    };
  },
  methods: {
    handleLoginClick() {
      // Add your login logic here
      console.log('Login clicked');
    },
  },
};
</script>

