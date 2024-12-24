Vue.createApp({
  data() {
    return {
      bgColor: {
        r: 0,
        g: 0,
        b: 0,
      },
    };
  },
  computed: {
    backgroundColor() {
      console.log(
        `rgb(${this.bgColor.r}, ${this.bgColor.g}, ${this.bgColor.b})`
      );
      return `rgb(${this.bgColor.r}, ${this.bgColor.g}, ${this.bgColor.b})`;
    },
  },
}).mount("#app");

// let rValue;
// let gValue;
// let bValue;
// function getRandomColor() {
// Generate random values between 0 and 255 for R, G, and B
//   rValue = Math.floor(Math.random() * 256); // Random number between 0-255 for Red
//   gValue = Math.floor(Math.random() * 256); // Random number between 0-255 for Green
//   bValue = Math.floor(Math.random() * 256); // Random number between 0-255 for Blue
// }

// Function to update the color based on the input value
// function updateColor() {
//   getRandomColor();
// Set the background color to reflect the RGB values
// main.style.background = `rgb(${rValue}, ${gValue}, ${bValue})`;
// header.style.background = `rgba(${rValue}, ${gValue}, ${bValue}, ${0.4})`;

// change the RGB values into Hex Values
//   rgbToHex(rValue, gValue, bValue);
// }

// Initial color update
// updateColor();

// Add event listener to update color on input change
// red.addEventListener("input", updateColor);
// green.addEventListener("input", updateColor);
// blue.addEventListener("input", updateColor);

// function rgbToHex(r, g, b) {
// Clamp each value to the range [0, 255]
// r = Math.max(0, Math.min(255, r));
// g = Math.max(0, Math.min(255, g));
// b = Math.max(0, Math.min(255, b));

// Convert to hex and pad with leading zeros if necessary
//   const hex =
//     "#" +
//     ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase(); // To return in uppercase format
//   valueDisplay.textContent = hex;
// }
