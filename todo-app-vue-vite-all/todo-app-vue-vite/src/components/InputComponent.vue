<template>
  <form @submit.prevent="store.addTodo">
    <input
      ref="todoInput"
      v-model="store.newTodo"
      type="text"
      id="add"
      placeholder="Enter your Todo..."
      class="same-width"
    /><label for="add"></label>
  </form>
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
<style scoped></style>
