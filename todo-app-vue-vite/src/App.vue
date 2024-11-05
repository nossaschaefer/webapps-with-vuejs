<template>
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
import HeaderComponent from '@/components/HeaderComponent.vue'
import ButtonAddTodo from './components/ButtonAddTodo.vue'
import ButtonRemoveTodo from '@/components/ButtonRemoveTodo.vue'
import TodoList from './components/TodoList.vue'
import RadioButtons from './components/RadioButtons.vue'
import InputComponent from './components/InputComponent.vue'
import { useTodosStore } from '@/stores/todos.js'

export default {
  data() {
    return {
      store: useTodosStore(),
    }
  },
  components: {
    HeaderComponent,
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

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

main {
  background: linear-gradient(315deg, #5a75ce, #0a1e65);
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allows main to take up available space */
  margin-inline: -0.5rem;
}

ul {
  color: #ff7eff;
  padding-left: 20px;
}

.container-liste {
  align-self: center;
}

#rmButton {
  background-color: #9372ff;
  color: #d5ff00;
  border: transparent;
  border-radius: 3px;
  padding: 10px;
  font-size: 17px;
  margin-bottom: 10px;
  box-shadow: 3px 3px 5px 1px #d5ff00;
}

.same-width {
  width: 100%; /* or specify a fixed width, e.g., 300px */
  max-width: 300px; /* Optional, to limit maximum width */
  box-sizing: border-box; /* Ensures padding is included in width */
  margin: 0.5rem 0; /* Add some spacing between elements */
  align-self: center;
}

#new-todo:focus,
#new-todo:active,
#new-todo:hover {
  background-color: #4d1eef;
  outline: none;
  color: #ff7eff;
}

#radioBtns {
  display: flex;
  padding-block: 20px;
  color: #ff7eff;
  justify-content: space-evenly;
}

#all,
#open,
#done {
  appearance: none;
  width: 15px;
  height: 15px;
  border: 3px solid #d5ff00; /* Border color */
  border-radius: 50%; /* Make it circular */

  cursor: pointer;
  outline: none;
}

#all:checked,
#open:checked,
#done:checked {
  background-color: #d5ff00; /* Change the background color when checked */
}

.div-radio {
  display: flex;
}

.container-radios {
  align-self: center;
}

/* Input-Style */

input:-webkit-autofill {
  background-color: #4d1eef !important;
  color: #ff7eff !important;
  -webkit-box-shadow: 0 0 0px 1000px #4d1eef inset; /* This hack ensures the autofill background matches */
  transition: background-color 5000s ease-in-out 0s; /* Prevents flickering */
}

#add {
  /* display: flex; */
  background-color: #5c2cff;
  color: #ff7eff;
  border: transparent;
  border-radius: 3px;
  padding: 10px;
  font-size: 17px;
  margin-bottom: 10px;
  box-shadow: 3px 3px 5px 1px #d5ff00;
}
::placeholder {
  color: #ff7eff;
}

form {
  padding-bottom: 0px;
  width: 300px; /* Control the width of the buttons area */
  align-self: center;
}
</style>
