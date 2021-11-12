function solution(arr){
    {
        for(let j=0; j<=arr.length+1; j++){
            for(let i=0; i<=j; i++){
                if(arr[i] === arr[i+1]){
                    arr.splice(i,1)
                }
                }
            }
        }
        var answer = arr
        return answer;
    }

// 효율성 테스트만 실패