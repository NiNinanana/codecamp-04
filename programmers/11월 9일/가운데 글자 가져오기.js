function solution(s) {
    
    let oddFront = ""
    let evenFront = ""
    let oddBack = ""
    let evenBack = ""
    
    s = s.split("")
    console.log(s)
    
    let a = s.length
    
    if(s.length % 2 === 1){
        s.splice(0, a/2)
        console.log(s)
        s.splice(1, a/2)
        console.log(s)
    } else{
        s.splice(0, a/2-1)
        console.log(s)
        s.splice(2, a/2-1)
        console.log(s)
    }
    
    s= s.join("")

    var answer = s;
    return answer;
}