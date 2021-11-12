// 1번풀이

for(let j=0; j<=arr.length+1; j++){
    for(let i=0; i<=j; i++){
        if(arr[i] === arr[i+1]){
            arr.splice(i,1)
        }
        }
    }
var answer = arr


// 2번풀이

let answer = []
for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i + 1]){
        answer.push(arr[i]);
    }        
}