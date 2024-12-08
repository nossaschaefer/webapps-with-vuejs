<template>
  <nav class="router-container home-route">
    <RouterLink class="router" :to="{ name: 'home' }">Home</RouterLink>
  </nav>

  <h1>This is my first Todo App with Vue Vite</h1>
</template>

<style>
h1 {
  text-align: center;
  padding-top: 10px;
  color: #5c2cff;
}

.home-route {
  padding-bottom: 20px;
}

html {
  background-color: #ff7eff;
}
</style>
