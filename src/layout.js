var width, button_constant, top_height, ws_width, ws_height;

function layout(){
  width = window.innerWidth; // Get the current width of the window
  button_constant = width*0.1;
  if (button_constant>55) button_constant = 55;

  // SIDE MENU  ============================================================================================================

  let side_buttons = document.getElementsByClassName("side"); // Select all elements with class "side"
  let side_buttons_img = document.querySelectorAll(".side img"); // Select all images within elements with class "side"

  // Loop through all elements with class "side"
  for (let i = 0; i < side_buttons.length; i++) {
    // Set the width and height of each element to 10% of the window width
    side_buttons[i].style.width = button_constant + "px";
    side_buttons[i].style.height = button_constant + "px";
  }

  // Loop through all images within elements with class "side"
  for (let i = 0; i < side_buttons_img.length; i++) {
    // Set the width and height of each image to 7.5% of the window width
    side_buttons_img[i].style.width = button_constant*0.75 + "px";
    side_buttons_img[i].style.height = button_constant*0.75 + "px";

    side_buttons_img[i].style.filter = "invert(100%)"; // Invert the color of each image
  }

  // Get the canvas element
  let canvas = document.getElementById("side-canvas");
  canvas.width = button_constant; // Set the width of the canvas to be the same as the button_constant
  canvas.height = window.innerHeight; // Set the height of the canvas to be the same as the window height

  // Set the position of the canvas to be to the left of the screen
  canvas.style.position = "absolute";
  canvas.style.left = "0";
  canvas.style.top = "0";
  // Set the z-index property to be behind the buttons
  canvas.style.zIndex = "-1";

  // Get the canvas context
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#414141"; // Set the fill style to #414141

  // Draw a filled rectangle that covers the entire canvas
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // TOP MENU  ============================================================================================================

  let top_buttons = document.getElementsByClassName("top"); // Select all elements with class "top"

  // Loop through all top buttons
  for (let i = 0; i < top_buttons.length; i++) {
    top_buttons[i].style.fontSize = button_constant*0.25 + "px";
  }

  top_height = top_buttons[0].offsetHeight;

  // Get the canvas element
  canvas = document.getElementById("top-canvas");
  canvas.width = window.innerWidth; // Set the width of the canvas to be the same as the window width
  canvas.height = top_height+1; // Set the height of the canvas to the height of the top buttons

  // Set the position of the canvas to be to the left of the screen
  canvas.style.position = "absolute";
  canvas.style.left = "0";
  canvas.style.top = "0";
  // Set the z-index property to be behind the buttons
  canvas.style.zIndex = "-1";

  // Get the canvas context
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "#414141"; // Set the fill style to #414141

  // Draw a filled rectangle that covers the entire canvas
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // WINDOW SPACE  ============================================================================================================

  // find the dimensions of the window space and store them in a global variable
  ws_width = window.innerWidth - button_constant
  ws_height = window.innerHeight - top_height
}

layout();
window.addEventListener("resize", function() {
  layout();
});

export {button_constant, top_height, ws_width, ws_height};