arr = [1, 88, 56, 90, -79, 34] // обозначаем массив
let max = 0 // обозначаем переменную, куда запишем в будущем максимальое значение массива
secondmax = 0 // обозначим переменную, куда в будущем запишем второе максимальное значение массива
for (let index = 0; index < arr.length; index++) {//делаем цикл переберающий значения массива, где они будут проверяться на <или> и записываться в переменные
    const element = arr[index];
    if (element > max){
        secondmax = max;// сюда записываем второе по счету максимальное значение массива
        max = element // а сюда максимальное
        
    }
    
}
// выводим итоговые значения
console.log("Максимальное число", max) // Максимальное число 90
console.log("Второе максимальное число",secondmax) // Второе максимальное число 88


function RandomNumberGnerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function FillArray(array, min, max) { 
    for (let index = 0; index < array.length; index++) {
        array[index] = RandomNumberGnerator(min, max) 
    }
}
arr2 = new Array(5)
FillArray(arr2, 10, 30)

arr1 = [1, 34, 5, 3, 56 ,9, 67 ,3, 0, 4, 35, 6] // 1 34 5 3 56 9 0 3 67 4 35 6

   
ReplaceMaxMin(arr1)
console.log(arr1)
console.log(arr2)
ReplaceMaxMin(arr2)
console.log(arr2)
