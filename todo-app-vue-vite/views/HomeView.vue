<template>
  <nav class="router-container">
    <RouterLink class="router" :to="{ name: 'about' }">About</RouterLink>
  </nav>

  <HeaderComponent />
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
import HeaderComponent from '@/components/HeaderComponent.vue'
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
    HeaderComponent,
  },
  computed: {},
  methods: {},
  async created() {
    await this.store.getTodos()
  },
}
</script>
