const nums = [1,2,34,432,432,4,5,6,45,6,765,45,3,4];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) console.log(nums[i]);
}

for (const value of nums) {
  if (value % 2 === 0) console.log(value);
}

// while loops
const queue = ["Joseph",  "Catelyn", "Sophie"];

while (queue.length !== 0) {
  const person = queue.shift();
  if (person === "Joseph") continue;
  console.log(person);
}

console.log(queue);