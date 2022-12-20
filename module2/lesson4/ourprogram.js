registerEventListener("foo", () => console.log("foo was called"));
registerEventListener("bar", () => {
  while(true);
});