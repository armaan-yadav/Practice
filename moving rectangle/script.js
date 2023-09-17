document.addEventListener("mousemove", function (event) {
  //   console.log(event);
  let x = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100,
    window.innerWidth - 100,
    event.clientX
  );
  let y = gsap.utils.mapRange(
    0,
    window.innerHeight,
    100,
    window.innerHeight - 100,
    event.clientY
  );
  gsap.to(".rectangle", {
    left: x,
    top: y,
    ease: Power4,
  });
});
