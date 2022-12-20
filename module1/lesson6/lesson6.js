const scores = [100, 92, 43, 99, 100, 0, 0, undefined, undefined, 23, 55, 96, 92, 86];

function removeInvalidScores(scores) {
  const validScores = [];
  for (const score of scores) {
    if (score !== undefined) {
      validScores.push(score);
    }
  }
  return validScores;
}

const cleanScores = removeInvalidScores(scores);

console.log(cleanScores);
