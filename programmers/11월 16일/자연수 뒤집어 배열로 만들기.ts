function solution(n) {
  var answer = [];

  n = String(n);
  n = n.split("");
  let nLength = n.length;
  for (let i = 0; i < nLength; i++) {
    answer.push(Number(n.pop()));
  }

  // answer.reverse() 배열을 거꾸로 해줌

  return answer;
}
