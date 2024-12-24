let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let main = document.querySelector("main");
let valueDisplay = document.querySelector("#valueDisplay");
let header = document.querySelector("header");

// Function to update the color based on the input value
function updateColor() {
  // Get the current value of the range input
  const rValue = red.value;
  const gValue = green.value;
  const bValue = blue.value;

  // Set the background color to reflect the RGB values
  main.style.background = `rgb(${rValue}, ${gValue}, ${bValue})`;
  header.style.background = `rgba(${rValue}, ${gValue}, ${bValue}, ${0.4})`;

  // change the RGB values into Hex Values
  rgbToHex(rValue, gValue, bValue);
}

// Initial color update
updateColor();

// Add event listener to update color on input change
red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

function rgbToHex(r, g, b) {
  // Clamp each value to the range [0, 255]
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Convert to hex and pad with leading zeros if necessary
  const hex =
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase(); // To return in uppercase format
  valueDisplay.textContent = hex;
}

// Add Get Random Color Button
