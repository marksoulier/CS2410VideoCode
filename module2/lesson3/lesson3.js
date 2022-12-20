const input = document.getElementById("email-input");

input.addEventListener("input", (e) => {
  console.log(e);
  const emailAddress = e.target.value;
  const errorDiv = document.getElementById("error-message");
  if (!emailAddress.includes("@")) {
    errorDiv.innerHTML = "Email is invalid!";
  } else {
    errorDiv.innerHTML = "";
  }
});
