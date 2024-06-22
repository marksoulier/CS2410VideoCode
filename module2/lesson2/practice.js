const button = document.getElementById("button");

let pressed = false;

button.addEventListener("click", () => {
    pressed = true;
    console.log(pressed);
});