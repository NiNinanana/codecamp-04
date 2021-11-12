function solution(s) {
    var answer = true;
    let abc = /[^0-9]/g;
    let result = s.replace(abc, ""); 
    
    if(s.length === 4 || s.length === 6){
        if(result.length === s.length){
            answer = true
        } else {
            answer = false
        }
    } else {
        answer = false
    }
    
    
    return answer;
}