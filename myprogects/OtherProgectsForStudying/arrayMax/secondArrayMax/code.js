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

arr1 = [1, 34, 5, 3, 56 ,9, 67 ,3, 0, 4, 35, 6] // 1 34 5 3 56 9 0 3 67 4 35 6
function ReplaceMaxMin(array) {
    let savearray = array;
    let max = array.indexOf( Math.max.apply(null, array));
    let min = Math.min(array);
    console.log(max);
    console.log(min);
    array[max] = savearray[min];
    array[min] = savearray[max];
    
}
ReplaceMaxMin(arr1)
console.log(arr1)
/* 
сделать пересенную куда будет записан порыдковый номер максимального числа и такую же для минимального

*/