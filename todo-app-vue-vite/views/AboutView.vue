<template>
  <nav class="router-container home-route">
    <RouterLink class="router" :to="{ name: 'home' }">Home</RouterLink>
  </nav>

  <h1>This is my first Todo App with Vue Vite</h1>
</template>

<style scoped>
h1 {
  text-align: center;
  padding-top: 10px;
}

.home-route {
  padding-bottom: 20px;
}
</style>
