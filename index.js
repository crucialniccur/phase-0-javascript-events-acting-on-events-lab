// Your code here
// const dodger = document.getElementById("dodger");

// console.log(dodger);

// change dodger color
// dodger.style.backgroundColor = "#FF69B4";
// console.log(dodger);

// moving the element
// moving up
// dodger.style.bottom = "100px";

// resetting the values
// dodger.style.left = "0px";
// dodger.style.bottom = "0px";

// Demonstrate How to Move an Element in Response to a Browser Event
// document.addEventListener("keydown", function (e) {
//   console.log(e);
// });

// code to move the dodger left when the key is pressed:
// document.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowLeft") {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
//     dodger.style.left = `${left - 1}px`;
//     // console.log(event.key);
//   }
// });

// Update an Element's Position on the Page Conditionally
// -----------
// function moveDodgerLeft() {
//   const leftNumbers = dodger.style.left.replace("px", "");
//   const left = parseInt(leftNumbers, 10);

//   if (left > 0) {
//     dodger.style.left = `${left - 1}px;`;
//   }
// }

// // moveDodgerLeft();
// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
//   }
// });

const dodger = document.getElementById("dodger");
console.log(dodger);

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// movedodgerRight
function moveDodgerRight() {
  const rightNumbers = dodger.style.right.replace("px", "");
  console.log(rightNumbers);
}

moveDodgerRight();
