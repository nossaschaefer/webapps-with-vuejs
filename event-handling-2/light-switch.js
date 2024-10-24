Vue.createApp({
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    buttonClass() {
      return this.isDarkMode ? "dark-Btn" : "light-Btn";
    },
  },
  methods: {
    toggleLightMode(event) {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.body.classList.remove("light-Body");
        document.body.classList.add("dark-Body");
      } else {
        document.body.classList.remove("dark-Body");
        document.body.classList.add("light-Body");
      }
    },
  },
}).mount("#app");

// let button = document.querySelector("button");
// let body = document.querySelector("body");

// let originalTitle = "Good Morning";
// let newTitle = "Good Night";

// button.addEventListener("click", function () {
//   // Toggle between light and dark classes for the body
//   body.classList.toggle("light-Body");
//   body.classList.toggle("dark-Body");

//   // Toggle between light and dark classes for the button
//   button.classList.toggle("light-Btn");
//   button.classList.toggle("dark-Btn");

//   // Toggle between the original and new title
//   if (document.title === originalTitle) {
//     document.title = newTitle;
//   } else {
//     document.title = originalTitle;
//   }
// });
