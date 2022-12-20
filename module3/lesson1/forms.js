const form = document.getElementById("my-form");

form.addEventListener("submit",  (e) => {
  e.preventDefault();
  console.log(e.target.email.value);
  console.log(e.target.password.value);
  console.log(e.target.phone.value);
  console.log(e.target.fruits.value);
  console.log("form was submitted");
});
