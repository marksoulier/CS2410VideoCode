document.getElementById("fruits").addEventListener("change", (e) => {
  console.log(e.target.value);
});

const radios = document.getElementsByClassName("radio");

for (const radio of radios) {
  radio.addEventListener("change", () => console.log("Radio was changed"))
}