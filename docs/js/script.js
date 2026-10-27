
// let isHeld = false;
// let hoveringButton = false;

// let changeCursorButton = document.querySelector(".change-cursor");

// let regularCursor = "url('images/cicada-cursor-1.png') 32 32, crosshair";
// let heldCursor = "url('images/cicada-cursor-2.png') 32 32, pointer";
// let buttonHoverCursor = "url('images/cicada-cursor-3.png') 32 32, crosshair";
// let cursorDeath = "url('images/cicada-cursor-4.png') 32 32, crosshair";

// function changeCursor(state){
//     console.log("Changing cursor to:", state);
//     switch(state){
//         case "default":
//             document.body.style.cursor = regularCursor;
//             break;
//         case "held":
//             document.body.style.cursor = heldCursor;
//             break;
//         case "buttonHover":
//             document.body.style.cursor = buttonHoverCursor;
//             break;
//         case "death":
//             document.body.style.cursor = cursorDeath;
//             break;
//     }
// }

// document.addEventListener("mousedown", function(event) {
//     isHeld = true;
//     changeCursor("held");
// });

// document.addEventListener("mouseup", function(event) {
//     isHeld = false; 
//     changeCursor("default");
// });

// changeCursorButton.addEventListener("mouseover", function(event) {
//     console.log("Mouse over button!");

//     hoveringButton = true;
//     changeCursor("buttonHover");
//     if(isHeld && hoveringButton){
//         changeCursor("death");
//     }
// });

// changeCursorButton.addEventListener("mouseout", function(event) {
//     console.log("Mouse out of button!");

//     hoveringButton = false;
//     changeCursor("default");
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed. You can now manipulate elements.');
//     changeCursor("default");
// });

