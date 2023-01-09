document.getElementById("profile").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = `profile.html?name=${document.getElementById("person-name").value}`;
});
