<template>
  <form>
    <input type="text" id="add" placeholder="Enter your Todo..." /><label
      for="add"
    ></label>
  </form>
</template>

<script></script>

<style>
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
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; */
  padding-bottom: 0px; /* Add padding at the bottom */
  width: 300px; /* Control the width of the buttons area */
  align-self: center;
}
</style>
