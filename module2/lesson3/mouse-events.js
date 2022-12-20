const output = document.getElementById("output")

document.body.addEventListener("mouseup", (e) => {
  output.innerHTML = `x: ${e.clientX}, y: ${e.clientY}`;
});