function solution(x, n) {
    var answer = [];
    
    let a = x
    for(let i=0; i<n; i++){
        answer.push(Number(x))
        x += a
    }
    
    return answer;
}