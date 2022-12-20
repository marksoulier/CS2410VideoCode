const button = document.getElementById("click-me");


function sayHello(name) {
  console.log(`Hello, ${name}`);
}

button.addEventListener("click", sayHello);
// this is the same as above
// button.onclick = sayHello;
