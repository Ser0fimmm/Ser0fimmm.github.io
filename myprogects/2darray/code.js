let arr = [
[5,12,9],
[14,18,8],
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

const array = [4, 31, 52, 97, 10, 43];
const result = findClosestElements(array);
console.log(" bbw" + result); // 4, 10