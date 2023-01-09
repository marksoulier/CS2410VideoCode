const container = document.getElementById("container");
const loader = document.getElementById("loader");

container.addEventListener("mousedown", (e) => {
  const animation = loader.animate(
    [{
      transform: `translate(${e.clientX - 64}px, ${e.clientY - 64}px)`
    }],
    {
      duration: 300,
      fill: "forwards",
      easing: "ease",
    }
  );

  animation.addEventListener("finish", () => {
    console.log("animation done");
  });
});