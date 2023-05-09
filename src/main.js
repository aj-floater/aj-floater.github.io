import {Programmer} from "../modules/programmer.js";
import {Viewport} from "../modules/viewport.js"
import {BIEM} from "../modules/biem.js"
import {Box} from "../modules/box.js"

alert("This is a basic online robot arm simulator. \n\
This version has limited server side functionality (due to security reasons)\n\
So the only functional sub-program is the BIEM (Basic Integrated Environment Modeller\n\
I may add a hard coded robot and the ability to copy and paste code into the code editor for this version in the future...\n\
but in the meantime checkout https://github.com/aj-floater/robot-arm-simulator-2 to host your own version\
of this program on your own local server for full functionality!")

let viewport = new Viewport("viewport", null); // red 0xff0808
let programmer = new Programmer("programmer");
let biem = new BIEM("biem");
let collisions = new Box(0x08ff08, "collisions");
// let programmer = new Box(0x08ff08, "programmer"); // green
// let programmer = new Viewport("programmer", 'urdf/URDF_models/SC_3DoF.urdf'); // green
// let biem = new Box(0x0808ff, "biem"); // blue
// let biem = new Viewport("biem", 'urdf/T12/urdf/arm.urdf'); // blue

function animate() {
	// Requesting the browser to call the animate function again on the next frame
	requestAnimationFrame( animate );

  viewport.animate();
  programmer.animate();
  biem.animate();
  collisions.animate();
}

// Calling the animate function to start the animation
animate();

export {viewport, programmer, biem, collisions};
