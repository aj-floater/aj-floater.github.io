import {Programmer} from "../modules/programmer.js";
import {Viewport} from "../modules/viewport.js"
import {BIEM} from "../modules/biem.js"
import {Box} from "../modules/box.js"

alert("This is a basic online robot arm simulator \
that has limited server side functionality (because this is a static website)\n\n\
Which means that importing programs and robots is sadly not possible...\n\n\
So, to make up for the lost functionality, I have added a hard coded robot and the ability to read some static files into the programmer to make up for the lost functionality!\n\n\
Checkout https://github.com/aj-floater/robot-arm-simulator-2 to host \
this program on your own for the complete feature set :)")

let viewport = new Viewport("viewport", "uploads/robot.urdf"); // red 0xff0808
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
