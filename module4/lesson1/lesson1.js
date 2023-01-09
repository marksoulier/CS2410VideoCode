document.getElementById("background").addEventListener("change",  (e) => {
  document.body.style.setProperty("--background-color", e.target.value);
});


document.getElementById("text").addEventListener("change",  (e) => {
  document.body.style.setProperty("--text-color", e.target.value);
});