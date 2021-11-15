function solutiona(s) {
  var answer = true;

  s = s.toLowerCase();
  s = s.split("");
  let countP = 0;
  let countY = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      countP++;
    } else if (s[i] === "y") {
      countY++;
    }
  }
  answer = countP++ === countY++;

  return answer;
}
