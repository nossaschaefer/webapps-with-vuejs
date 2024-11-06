<template>
  <button @click="store.addTodo(todo)" id="addBtn">Add New Todos</button>
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
  color: #ff7eff;
  margin-top: 20px;
  border: transparent;
  border-radius: 3px;
  padding: 10px;
  font-size: 17px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 5px 1px #ff7eff;
  align-self: center;
}
</style>
