let open = false;
const drawer = document.getElementById("drawer");

let currentDrawerX = -300;
let lastX = 0;

function animateDrawer() {
  drawer.animate([{
    transform: `translateX(${currentDrawerX}px)`
  }], {
    duration: 300,
    easing: "ease",
  }).addEventListener("finish", () => {
    drawer.style.setProperty("--x-position", `${currentDrawerX}px`);
  });
}

function handleMove(e) {
  const delta = e.touches[0].clientX - lastX;
  lastX = e.touches[0].clientX;
  currentDrawerX += delta;
  if (currentDrawerX < -300) {
    currentDrawerX = -300;
  } else if (currentDrawerX > 0) {
    currentDrawerX = 0;
  }
  drawer.style.setProperty("--x-position", `${currentDrawerX}px`);
}

function handleEnd(e) {
  if (currentDrawerX > -150) {
    currentDrawerX = 0;
    open = true;
  } else {
    currentDrawerX = -300;
    open = false;
  }
  animateDrawer();
  window.removeEventListener("touchmove", handleMove);
  window.removeEventListener("touchend", handleEnd);
}

window.addEventListener("touchstart", (e) => {
  console.log("called!");
  lastX = e.touches[0].clientX;
  if (lastX > 50) return;

  window.addEventListener("touchmove", handleMove);
  window.addEventListener("touchend", handleEnd);
});

drawer.addEventListener("touchstart", (e) => {
  e.stopPropagation();
  lastX = e.touches[0].clientX;
  window.addEventListener("touchmove", handleMove);
  window.addEventListener("touchend", handleEnd);
});

-

document.getElementById("menu-button").addEventListener("click", () => {
  open = !open;
  if (open) {
    currentDrawerX = 0;
  } else {
    currentDrawerX = -300;
  }
  animateDrawer();
});


