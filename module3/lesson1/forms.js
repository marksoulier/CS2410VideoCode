const form = document.getElementById("madlibform");
const output = document.getElementById("output");

form.addEventListener("submit",  (e) => {
  e.preventDefault();
  if (!e.target.noun.value) {
    output.innerHTML = "Please enter a noun.";
  }
  if (!e.target.verb1.value) {
    output.innerHTML = "Please enter a valid first verb.";
  }
  if (!e.target.verb2.value) {
    output.innerHTML = "Please enter the second verb.";
  }
  if (!e.target.adjective.value) {
    output.innerHTML = "Please enter an adjective.";
  }
  if (!e.target.object.value) {
    output.innerHTML = "Please enter a object.";
  }

  const noun = e.target.noun.value;
  const verb1 = e.target.verb1.value;
  const verb2 = e.target.verb2.value;
  const adjective = e.target.adjective.value;
  const object = e.target.object.value;

  output.innerHTML = `The ${adjective} ${noun} ${verb1} the ${object} ${verb2}.`;
});
