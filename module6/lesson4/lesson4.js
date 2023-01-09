async function getData() {
  const res = await fetch("somedata.txt");
  const text = await res.text();
  return text;
}
