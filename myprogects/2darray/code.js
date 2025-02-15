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
