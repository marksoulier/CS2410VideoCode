const queryString = window.location.search;

const personName = queryString.split("=")[1];

document.getElementById("name").innerHTML = personName;


document.getElementById("back").addEventListener("click", () => {
  window.history.go(-1);
})