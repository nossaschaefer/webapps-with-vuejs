<template>
  <button id="rmButton" @click="store.removeDoneTodos(todo)" class="same-width">
    Remove Done Todos
  </button>
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
