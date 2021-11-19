function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];
      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }
  answer.sort(function (a, b) {
    return a - b;
  });

  return answer;
}
