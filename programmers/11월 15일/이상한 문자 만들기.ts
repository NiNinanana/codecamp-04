function solution(s) {
  //     var answer = [];
  //     s=s.split(" ")
  //     // console.log(s)
  //     // let s1 = s[0].split("")
  //     // console.log(s1)
  //     let spp = ""
  //     for(let j=0; j<s.length; j++){
  //         spp = s[j].split("")
  //         for(let i=0; i<spp.length; i++){
  //             if(i % 2 === 0){
  //                 spp[i]=spp[i].toUpperCase()
  //             }
  //             answer.push(spp[i])
  //         }
  //         answer.push(" ")
  //     }
  //     answer.pop()
  //     answer = answer.join("")

  let answer = "";
  let idx = 0; // 단어별로 인덱스 값 저장

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      idx = 0;
    } else {
      answer += idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
      idx++;
    }
  }

  return answer;
}
