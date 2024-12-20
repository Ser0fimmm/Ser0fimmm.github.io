let arr1 = [80, 50, 60, 2, -90, 120, 66,] //обозначаем массив
let max = Math.max.apply(null, arr1) // узнаем максимальное значение его компонентов через базовую функцию
console.log(max) //и выводим в консоль

let max1 = arr1[1] //и как бы это выглядело через if
if (max1 < arr1[2]){
 max1 = arr1[2]
}
if (max1 < arr1[3]){
    max1 = arr1[3]
}                    // это колхозный индийский код. так делать не надо
if (max1 < arr1[4]){
 max1 = arr1[4]
}
if(max1 < arr1[5]){
    max1 = arr1[5]
}
if (max1 < arr1[6]){
    max1 = arr1[6]
}

console.log(max1) // и выводим значение


// А ВОТ ТАК ЭТО ДОЛЖНО БЫГЛЯДЕТЬ ПРАВИЛЬНО!!!
let max2 = 0  //обозначаем пременную max. берем заведомо оч маленькое число чтобы позже сразу произошло преобразование переменной
for (let index = 0; index < arr1.length; index++) { // делаем цикл, где будет вычисляться максимальное значение arr1
    const element = arr1[index];
    if (element > max2) { // здеь бдет проверяться на > или < и перезаписываться значение max
        max2 = element;
    }
    //это правильно и удобно т.к проверятся сразу все компоненты массива без их перечисления
}
console.log(max2) // и снова выводим значение max

//дальше код который оч полезен и можно интерпритировать куда угодно
function RandomNumberGnerator(min,max) { //
    return Math.floor(Math.random() * (max - min) + min)

}

let n = 10 // задаем какое либо значение длины массива (можно и рандомом, функция с ним будет дальше) 


let arr3 = new Array(n) // и создаем какой либо массив с этой длиной с которым будем дальше работать. можно и с другими массивами работать


function FillArray(array, min, max) { // функция заполняющая массив случайными числами. для использования: (массив для заполнения, минимальное значение элемента, максимальное значение элемента). используется только в паре с rng функцией
    for (let index = 0; index < array.length; index++) {
        array[index] = RandomNumberGnerator(min, max) //
        
    }
}

FillArray(arr3, 1, 30)// заполняем массив с помощью функции
let arr4 = []
console.log("новое задание - новый массив: ", arr3)//вывод в консоль новоиспеченый массив со случайными значениями
let arr5 = [] //и нечетных тоже
function SortArrayEven(ArrayForSort, EvenArray,) { //функция для сортировки четных значений в массива в новый массив
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 == 0){// если число четное (идет проверка остатка при делении на 2)
            EvenArray.push(ArrayForSort[index]); // то записать значение в конец массива с четными значениями 
        }  
    }
}

function SortArrayNotEen(ArrayForSort,NotEvenArray){//функция для сортировки нечетных значений массива в новый массив
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 != 0){//если число нечетное (идет проверка осатка при делении на 2)
            NotEvenArray.push(ArrayForSort[index]); //то записать его в конец массива с нечетными числами
        }  
    }
}

function ArraySortForEvenAndNotEven(ArrayForSort, EvenArray, NotEvenAray) {//функция, сортирующая массив на 2 других: четные и нечетные значения в 2 отдельных массива
    SortArrayEven(ArrayForSort, EvenArray); //вызывает функцию для сортировки четных значений в массива
    SortArrayNotEen(ArrayForSort, NotEvenAray); //вызывает функцию для сортировки нечетных значений в массива
    
}//да, просто и отчасти глупо, но это отдельный случай чтобы сэкономить место и повысить понимание происходящего

ArraySortForEvenAndNotEven(arr3,arr4,arr5) //вызываем срртировку сразу на четные и нечетные массива arr3

function ArrayRepeatingNumbersExistance(array) {//проверяет на наличие в массиве повторяющихся элементов
    let i = 0;//создаем счетчик 
    array.sort((a, b) => a - b);//и сортируем массив
    for (let index = 0; index < array.length; index++) {//и цикл для последовательной проверки
        const element = array[index];
        const element2 = array[index + 1];
        if (element == element2) {
            i++;//добавляем 1 если повторяющиеся элементы нашлись
            break;//и заканчиваем цикл, ведь задача вернуть true или false
        }
        else if(element != element2) {
            continue;// а если еще не нашлись то продолжаем выполнение цикла
        }   
    }
    if (i >= 1) return true;//возвращаем
    else if (i == 0) return false;//результат
}// Возвращает true если в массиве есть повторяющиеся элеменеты и false если их нет

function NumberOfRepeatingNumbersInArray(array) {//определяет кол-во пар повторяющихся значений в массиве
        let i = 0;
        array.sort((a, b) => a - b);
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            const element2 = array[index + 1];
            if (element == element2) {
                i ++;
                //все то же самое что и в прошлой функции, но вернуть надо кол-во повторяющихся значений, поэтому цикл ыв этом месте не заканчивается
            }
            else if(element != element2) {
                continue;
            }   
        }
        return i;//возвращаем кол-во пар повторяющихся значений в массив
    } 

let arr6 = []

function RepeatingNumbersInArrayToNewArray(array, ArrayOfRepeatingNumbres) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const element2 = array[index + 1];
        if (element == element2) {
            ArrayOfRepeatingNumbres.push(array[index]);
            ArrayOfRepeatingNumbres.push(array[index + 1])
        } //Пока что оно не работает никак и фактически бесполезно. Не берите в голову эту функцию, она пока не готова.
        else if(element != element2) {
            continue;
        }   
    }

}

RepeatingNumbersInArrayToNewArray(arr3, arr6)

console.log("итог сортировки четных значений: ", arr4) //и выводим эти 2 массива
console.log("итог сортировки нечетных значений: ", arr5) //в консоль с пояснениями
console.log(ArrayRepeatingNumbersExistance(arr3))
console.log(NumberOfRepeatingNumbersInArray(arr3))
console.log(arr6)
// этот код можно подгонять куда угодно в любой другой код

