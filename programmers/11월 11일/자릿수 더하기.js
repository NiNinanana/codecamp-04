function solution(n)
{
    var answer = 0;

    n = String(n);
    n.split("");

    for(let i=0; i<n.length; i++){
        answer = Number(answer) + Number(n[i])
    }
    
    return answer;
}