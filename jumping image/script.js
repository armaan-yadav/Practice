const main = document.querySelector(".main");
const mainImg = document.querySelectorAll(".main-img");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

main.addEventListener(
  "mousemove",
  throttleFunction((event) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("img-div");
    let img = document.createElement("img");
    img.setAttribute("src", "https://source.unsplash.com/random");
    img.classList.add("img");
    newDiv.appendChild(img);
    let x = event.clientX;
    let y = event.clientY;
    newDiv.style.cssText = `left:${x}px;top:${y}px;`;
    main.appendChild(newDiv);
    setTimeout(() => {
      newDiv.remove("img-div");
    }, 2000);
  }, 200)
);
