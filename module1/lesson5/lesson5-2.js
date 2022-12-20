const nums = [1,3,5,9,13,23,26,27,53];

function find(nums, predicate) {
  for (const num of nums) {
    if (predicate(num)) return num;
  }
  return null;
}

console.log(find(nums, num => num % 2 === 0));
console.log(find(nums, num => num === 6));