const input = document.getElementById("user-input");
const button = document.getElementById("fuddify-button");
const output = document.getElementById("fuddified-output");

button.addEventListener("click", () => {
  // input.value gets the text that the user typed int
  const text = input.value;
  let fuddifiedText = text.replaceAll("r", "w");
  fuddifiedText = fuddifiedText.replaceAll("R", "W");
  // puts the html into the DOM
  output.innerHTML = `<strong>${fuddifiedText}</strong>`;
});
