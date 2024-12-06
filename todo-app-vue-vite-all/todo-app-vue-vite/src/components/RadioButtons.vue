<template>
  <div class="container-radios">
    <form id="radioBtns">
      <div class="div-radio">
        <label for="all">All</label>
        <input
          type="radio"
          id="all"
          name="filter"
          value="all"
          v-model="store.filter"
        />
      </div>

      <div class="div-radio">
        <label for="open">Open</label>
        <input
          type="radio"
          id="open"
          name="filter"
          value="open"
          v-model="store.filter"
        />
      </div>

      <div class="div-radio">
        <label for="done">Done</label>
        <input
          type="radio"
          id="done"
          name="filter"
          value="done"
          v-model="store.filter"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { useTodosStore } from '@/stores/todos.js'

export default {
  data() {
    return {
      store: useTodosStore(),
    }
  },
}
</script>

<style scoped>
form {
  padding-bottom: 0px;
  width: 300px; /* Control the width of the buttons area */
  align-self: center;
}
</style>
