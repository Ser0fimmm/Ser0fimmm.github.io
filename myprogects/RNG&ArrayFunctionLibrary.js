/**
 * Генератор случайных чисел
 * @param {*} min минимальное возможное значение
 * @param {*} max максимальное возможное значение
 * @returns Случайное число
 */
function RandomNumberGnerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
/**
 * Заполнение массива случайными значениями
 * @param {*} array массив для заполнения
 * @param {*} min минимальное возможное значение элемента
 * @param {*} max максимальное возможное значение элемента
 */
function FillArray(array, min, max) { 
    for (let index = 0; index < array.length; index++) {
        array[index] = RandomNumberGnerator(min, max) 
    }
}
/**
 * Заполнение массива случайными значениями
 * @param {*} array массив для заполнения
 * @param {*} min минимальное возможное значение элемента
 * @param {*} max максимальное возможное значение элемента
 */
function RandomlyFillArray(array, min, max){
    for (let index = 0; index < array.length; index++) {
        array[index] = Math.floor(Math.random() * (max - min) + min) 
    }
}
/**
 * Перенос четных значений массива в отдельный массив
 * @param {*} ArrayForSort Массив для сортировки
 * @param {*} EvenArray Масив для четных значений
 */ 
function SortArrayEven(ArrayForSort, EvenArray) { 
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 == 0) {
            EvenArray.push(ArrayForSort[index]);
        }  
    }
} 
/**
 * Перенос нечетных значений в отдельный массив
 * @param {*} ArrayForSort Масив для сортировки
 * @param {*} OddArray Массив для нечетных значений
 */
function SortArrayOdd(ArrayForSort, OddArray){
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 != 0) {
            OddArray.push(ArrayForSort[index]); 
        }  
    }
}
/**
 * Сортировка масива по четности значений в два отдельных массива
 * @param {*} ArrayForSort Массив для сортировки
 * @param {*} EvenArray Массив для четных значений
 * @param {*} OddAray Массив для нечетных значений
 */
function ArraySortForEvenAndOdd(ArrayForSort, EvenArray, OddAray) {
    SortArrayEven(ArrayForSort, EvenArray); 
    SortArrayNotEen(ArrayForSort, OddAray);  
}
/**
 * Сортировка масива по четности значений в два отдельных массива
 * @param {*} ArrayForSort Массив для сортировки
 * @param {*} EvenArray Массив для четных значений
 * @param {*} OddAray Массив для нечетных значений
 */
function ArraySortForEvenAndOddW(ArrayForSort, EvenArray, OddAray) {
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 == 0) {
            EvenArray.push(ArrayForSort[index]);
        }  
    }
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 != 0) {
            OddArray.push(ArrayForSort[index]); 
        }  
    }
}
/**
 * Вычисление максимального значения в массиве
 * @param {*} Array Массив 
 * @returns Максимальное значение массива
 */
function FindMaxInArray(Array){
    for (let index = 0; index < Array.length; index++) {
        const element = Array[index];
        let Maxelement = 0;
        if (element > Maxelement) { 
            Maxelement = element;
        }
        return Maxelement;
    }
}
/**
 * Вычисление инимального значениф в массиве
 * @param {*} Array Массив
 * @returns Минимальное значение массива
 */
function FindMinInArray(Array){
    for (let index = 0; index < Array.length; index++) {
        const element = Array[index];
        let MinElement = Array[0];
        if (element < MinElement) { 
            MinElement = element;
        }
        return MinElement;
    }
}
/**
 * Проверка на наличие в массиве повторных значений
 * @param {*} array Массив
 * @returns Наличие в массиве повторных значений
 */
function RepeatingNumbersExistanceInArray(array) {
    let i = 0;
    array.sort((a, b) => a - b);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const element2 = array[index + 1];
        if (element == element2) {
            i++;
            break;
        }
        else if(element != element2) {
            continue;
        }   
    }
    if (i >= 1) return true;
    else if (i == 0) return false;
}
/**
 * Вычисление кол-ва пар повторяющихся значений в массиве
 * @param {*} array Массив
 * @returns кол-во пар повторяющихся значений
 */
function NumberOfRepeatingNumbersInArray(array) {
    let i = 0;
    array.sort((a, b) => a - b);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const element2 = array[index + 1];
        if (element == element2) {
            i ++;
        }
        else if(element != element2) {
            continue;
        }   
    }
    return i;
}
/**
 * Вычисление суммы значений позиций от a до b в массиве
 * @param {*} array Массив
 * @param {*} a Начальная позиция
 * @param {*} b Конечная позиция
 * @returns Сумма значений позиций от a до b
 */
function SumArrayElementsFromAToB (array, a, b) { 
    let summ = 0;
    const c = Math.max(a,b);
    const d = Math.min(a,b);
    for (let index = d; index <= c; index++) {
            const element = array[index];
            sum += element;
    }
    return summ;
}
/**
 * Вычисление разности значений позиций массива от a до b
 * @param {*} array Массив
 * @param {*} a Начальная позиция (Уменьшаемое)
 * @param {*} b Конечная позиция (Последнее вычитаемое)
 * @returns  разность значений позиций массива от a до b
 */
function DifferenceAraayElementsFromAToB(array, a, b) {
    const c = Math.max(a,b);
    const d = Math.min(a,b);
    let diff = c;
    for (let index = d; index <= c; index++) {
            const element = array[index];
            diff += element;
    }
    return diff;
}