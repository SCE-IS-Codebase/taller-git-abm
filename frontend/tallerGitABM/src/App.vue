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
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login" @click="handleLoginClick">{{ loginText }}</RouterLink>
      </nav>
    </div>
  </header>
  <body>
    <RouterView />
  </body>
</template>

