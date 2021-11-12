function solution(array, commands) {
    var answer = [];
    let arrayOne = array;
    for(let i=0; i<commands.length ; i++){ 
            array = arrayOne
            let arrayPush = array.slice(commands[i][0]-1, commands[i][1]) // [5, 2, 6, 3]
            answer.push(arrayPush.sort()[commands[i][2]-1]) // [2, 3, 5, 6]되고 거기서 5
            
            // answer.push(array.slice(commands[i][j]-1, commands[i][j]).sort()[commands[i][j]-1])
    }
    return answer;
}

//하나만 실패뜸;;;;