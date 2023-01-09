function handleClick(el) {
  if (el.dataset.visible !== "true") {
    el.dataset.visible = "true";
  } else {
    el.dataset.visible = "false";
  }
}


[...document.getElementsByClassName("contact")].forEach((el) => {
  el.addEventListener("click", () => {
    handleClick(el);
  });

  el.addEventListener("keypress", (e) => {
    if (e.code === "Enter" || e.code === "Space") {
      handleClick(el);
    }
  });
});
