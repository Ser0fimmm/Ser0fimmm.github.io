
let numbers = [1, 1]
function fibonacci (array, num) {
    for (let index = 2; index < num + 2; index++) {
        array.push(array[index - 1] + array[index - 2]) 
        
    }
} 
fibonacci(numbers, 25)
console.log(numbers)
let fibarr = [1,1]
function fibonacci2 (array, num) {
    let result
    for (let index = 1; array[index] <= num; index++) {
        if (array[index] < num) {
            array.push(array[index - 1] + array[index - 2])
            
        if (array[index] > num) {
            if (num - array[index - 1] < array[index] - num) {
                result = array[index - 1]
                break
            }
            else {
                result = array[index]
                break
            }
        }
        }
    }
    return result
}

let g = fibonacci2(fibarr, 14)
console.log(g)

//if (num - array[index - 1] < array[index] - num)
    //            return(array[index - 1])
                
     //       else {
     //           return(array[index])
                
      //  }
function fibonacci3(stock) {
    let array = [1,1]
    for (let index = 2; index < 100; index++) {
        array.push(array[index - 1] + array[index - 2]) 
        
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > stock) {
            if (stock - array[index - 1] < array[index] - stock) { 
                return array[index - 1]
            }
            else {
                return array[index]
            } 
        }
    }
}
console.log(fibonacci3(14))
function power (x,y) {
    let result
    if (y > 0){
        result = x * power(x, y - 1)
    } 
    if (y = 0) result = 1
    
}