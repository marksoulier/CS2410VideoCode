let isNavOpen = false;
const drawer = document.getElementById("drawer");
// const container = document.getElementById("container");
const mask = document.getElementById("mask");

function toggleMask() {
  isNavOpen = !isNavOpen;
  drawer.dataset.open = `${isNavOpen}`;
  mask.dataset.open = `${isNavOpen}`;
}

document.getElementById("nav-button").addEventListener("click", toggleMask);

mask.addEventListener("click", toggleMask);