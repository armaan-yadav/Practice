const rectangle = document.querySelector(".rectangle");
let left = rectangle.getBoundingClientRect().left;
let right = rectangle.getBoundingClientRect().right;
let topp = rectangle.getBoundingClientRect().top;
let bottom = rectangle.getBoundingClientRect().bottom;

console.log("top : ", topp);
console.log("left : ", left);
console.log("right : ", right);
console.log("bottom : ", bottom);
console.log("centre : ", (left + right) / 2);
rectangle.addEventListener("mousemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;
  let colorRed = gsap.utils.mapRange(left, (left + right) / 2, 255, 50, x);
  let colorBlue = gsap.utils.mapRange((left + right) / 2, right, 50, 255, x);

  if (x > left && x < (left + right) / 2) {
    rectangle.style.backgroundColor = `rgb(${colorRed},0,0)`;
  } else {
    rectangle.style.backgroundColor = `rgb(0,0,${colorBlue})`;
  }
});

document.addEventListener("mousemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;
  if (x < left || x > right || y < topp || y > bottom) {
    rectangle.style.backgroundColor = "transparent";
  }
});
rectangle.addEventListener("touchemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;
  let colorRed = gsap.utils.mapRange(left, (left + right) / 2, 255, 50, x);
  let colorBlue = gsap.utils.mapRange((left + right) / 2, right, 50, 255, x);

  if (x > left && x < (left + right) / 2) {
    rectangle.style.backgroundColor = `rgb(${colorRed},0,0)`;
  } else {
    rectangle.style.backgroundColor = `rgb(0,0,${colorBlue})`;
  }
});

document.addEventListener("touchmove", (event) => {
  let x = event.clientX;
  let y = event.clientY;
  if (x < left || x > right || y < topp || y > bottom) {
    rectangle.style.backgroundColor = "transparent";
  }
});
