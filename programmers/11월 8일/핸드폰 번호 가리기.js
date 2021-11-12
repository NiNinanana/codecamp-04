function solution(phone_number) {
    
    let backNumber = phone_number.slice(-4)    
    let frontNumber = phone_number.slice(undefined, -4) 
    backNumber = backNumber.split("")
    for(let i=0; i<frontNumber.length; i++){
        backNumber.unshift("*")
    }
    
    backNumber = backNumber.join("")
  
    return backNumber;
}