function f(strings, ...vars) {
  let result = "";
  for (let i = 0; i < vars.length; i ++) {
    result += strings[i];
    result += vars[i].toFixed(2);
  }
  result += strings[strings.length - 1];
  return result;
}


const num = 1.234234
const num2 = 3.23423234
console.log(f`The nums are and ${num} and ${num2}`);


const num3 = 43.12341234
const num4 = 5.23423234
console.log(f`The nums are and ${num3} and ${num4}`);