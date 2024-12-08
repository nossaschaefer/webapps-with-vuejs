<template>
  <button @click="store.addTodo(todo)" id="addBtn">Add</button>
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
#addBtn {
  background-color: #d5ff00;
  color: #5c2cff;

  border: transparent;
  border-radius: 3px;
  padding: 10px;
  font-size: 17px;

  box-shadow: 3px 3px 5px 1px #ff7eff;
  align-self: center;
  cursor: pointer;
}
</style>
