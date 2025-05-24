let arr = [
[5,12,9],
[14,26,8],
[21,24,7],
]

function showMaze(array) {
    for (let index = 0; index < array.length; index++) {
        console.log("строка " + index);
        for (let l = 0; l < array.length; l++) {
            console.log(array[index],[l])
            
        }
        
    }
}

function findTreasure(array) {
    let terasure = [];
    for (let index = 0; index < array.length; index++) {
        for (let l = 0; l < array.length; l++) {
          if (array[index][l] > 10){
            if ((l % 2) == 0) {
                if ((array[index][l] % 3) == 0) {
                    terasure.push(array[index][l]);
                }
            }
          }
        }
        
    }
    console.log(terasure);
}
showMaze(arr)
findTreasure(arr)

function findClosestElements(arr) {
    if (arr.length < 2) {
        return []; // Массив должен содержать как минимум 2 элемент
    }
    let minDiff = Math.abs(arr[1] - arr[0]);
    let result = [0, 1];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const currentDiff = Math.abs(arr[j] - arr[i]);
            if (currentDiff < minDiff) {
                minDiff = currentDiff;
                result = [arr[i], arr[j]];
            }
        }
    }
    // Возвращаем номера в порядке возрастания (на случай если i > j)
    return result.sort((a, b) => a - b);
}

let array = [4, 31, 52, 97, 10, 43];
const result = findClosestElements(array);
console.log(" bbw" + result); // 4, 10

function sumwout(arr, a, b) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
       if (i < a){ sum += arr[i]} 
       if (i > b){ sum += arr[i]}
}
    return sum
}
let m = [5, -1, 1, 5, 4, 3]
console.log(sumwout(m, 1, 4))

function matrixw(array, a) {
    let s = 1
    for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
            if (i = a)
            s *= array[j][i]
            } 
        
        
    }
    return s
}
//console.log(matrixw(arr, 0))

function findMaxInColumns(matrix) {
  
    const rows = matrix.length;
    const cols = matrix[0].length;
    const maxInColumns = [];
  
    for (let col = 0; col < cols; col++) {
      let max = matrix[0][col]; 
  
      for (let row = 1; row < rows; row++) {
        if (matrix[row][col] > max) {
          max = matrix[row][col];
        }
      }
  
      maxInColumns.push(max);
    }
  
    return maxInColumns;
}
console.log(findMaxInColumns(arr))


function findmaxin2darray(array) {
    let max = array[0][0]
    let maxcol 
    let maxrow
    
    for (let col = 0; col < array.length; col++) {
        for (let row = 0; row < array[0].length; row++) {
            const element = array[row][col];
            if (element == max) {continue}
            if (element > max) {maxcol = col
                                maxrow = row}

        }
        
    }
    let result = [maxcol, maxrow]
    return result
} 
console.log(findmaxin2darray(arr))
//document.getElementById("ddddd").textContent = `lol${findmaxin2darray(arr)}`
function findlocalmax(array) {
   
    for (let col = 1; col < array.length - 1; col++) {
        for (let row = 1; row < array[0].length - 1; row++) {
            
            if (array[row][col] > array[row + 1][col]
                 && array[row][col] > array[row - 1][col]
                  && array[row][col] > array[row][col + 1]
                   && array[row][col] > array[row][col - 1]
                    && array[row][col] > array[row + 1][col + 1]
                     && array[row][col] > array[row - 1][col + 1]
                      && array[row][col] > array[row + 1][col - 1]
                       && array[row][col] > array[row - 1][col - 1]){
                    array[row][col] = 0
            }
        }
    }
    return array
}
let lox = 
[[3, -2, -5, -5, 8, -4, -1, -23, -11, -20], 
[-4, -6, 16, 9, -8, 2, 10, -32, -18, -13], 
[21, 7, -6, -3, 34, -7, -23, 25, 27, 38], 
[7, 29, 38, 19, 55, 48, 46, 49, -8, -46], 
[80, -3, 76, 46, 72, -33, 14, 44, 71, -20], 
[82, 95, 23, -6, 1, 70, 50, 16, 25, 7], 
[52, 36, -25, -35, 18, -36, 93, 11, -44, 9], 
[114, 108, 33, 61, -4, 131, 34, -26, 47, -17], 
[37, 56, 135, -12, 34, 67, -17, 14, 93, -67], 
[-4, 23, 175, -44, 30, -38, 89, 159, 28, 178]]
let lox2 = findlocalmax(lox)
console.log(lox2)
let arr1 = findlocalmax(arr)
function findlocalmaxtest(array, array1) {
   let test  = false
    for (let col = 1; col < array.length - 1; col++) {
        for (let row = 1; row < array[0].length - 1; row++) {
            
            if (array[row][col] > array[row + 1][col]
                 && array[row][col] > array[row - 1][col]
                  && array[row][col] > array[row][col + 1]
                   && array[row][col] > array[row][col - 1]
                    && array[row][col] > array[row + 1][col + 1]
                     && array[row][col] > array[row - 1][col + 1]
                      && array[row][col] > array[row + 1][col - 1]
                       && array[row][col] > array[row - 1][col - 1]
                        && array1[row][col] == 0){
                    test = true
            }
           
            
        }
    }
    return test
}
console.log(findlocalmaxtest(arr, arr1))  