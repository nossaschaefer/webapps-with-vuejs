<template>
  <main class="centered-container">
    <RadioButtons />

    <InputComponent />

    <ButtonAddTodo id="addBtn" class="same-width" />

    <TodoList />

    <ButtonRemoveTodo />
  </main>
</template>

<script>
import ButtonAddTodo from '@/components/ButtonAddTodo.vue'
import ButtonRemoveTodo from '@/components/ButtonRemoveTodo.vue'
import TodoList from '@/components/TodoList.vue'
import RadioButtons from '@/components/RadioButtons.vue'
import InputComponent from '@/components/InputComponent.vue'
import { useTodosStore } from '@/stores/todos.js'

export default {
  data() {
    return {
      store: useTodosStore(),
    }
  },
  components: {
    ButtonAddTodo,
    ButtonRemoveTodo,
    RadioButtons,
    InputComponent,
    TodoList,
  },
  computed: {},
  methods: {},
  async created() {
    await this.store.getTodos()
  },
}
</script>
