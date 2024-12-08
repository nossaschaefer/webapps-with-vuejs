<template>
  <div>
    <button id="rmButton" @click="store.removeDoneTodos(todo)">
      Remove Done Todos
    </button>
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
div {
  text-align: center;
}
#rmButton {
  cursor: pointer;
}
</style>
