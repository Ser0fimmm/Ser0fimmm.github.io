let InputArray = []
let EvenInputArray = []
let NotEvenInputArray = []
let AmountOfPairsOfRepeatingNumbers = []
let ExistingrepeatingNumbers = 0
function addnumbetoarray() {
    InputArray.push(document.getElementById("newarrayelement").value);
    document.getElementById("inputarray").textContent = InputArray;
}
function SortArrayEven1(ArrayForSort) {
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 == 0) {
            EvenInputArray.push(ArrayForSort[index]);
        }  
    }
    document.getElementById("eveninputarray").textContent = EvenInputArray;
}
function SortArrayNotEven1(ArrayForSort){//функция для сортировки нечетных значений массива в новый массив
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 != 0){//если число нечетное (идет проверка осатка при делении на 2)
            NotEvenInputArray.push(ArrayForSort[index]); //то записать его в конец массива с нечетными числами
        }  
    }
    document.getElementById("noteveninputarray").textContent = NotEvenInputArray;
}
function RepeatingNumbersExistanceInArray1(array) {
    let i = 0;
    array.sort((a, b) => a - b);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const element2 = array[index + 1];
        if (element == element2) {
            ExistingrepeatingNumbers++;
            continue;
        }
        else if(element != element2) {
            continue;
        }   
    }
    if (ExistingrepeatingNumbers >= 1) document.getElementById("repeatingnums").textContent = `В массиве есть пары повторяющихся значений. Их число: ${ExistingrepeatingNumbers}`
    else if (ExistingrepeatingNumbers == 0) document.getElementById("repeatingnums").textContent = "В массиве нет повторяющихся значений"
}
