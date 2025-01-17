let userarray = []
let evenarray = []
let rngevenarray = []
let oddarray = []
let rngoddarray =[]
let rnsarray =[]
let rngarray = new Array()
let repeatingpairs = 0
function addnum() {
    userarray.push(document.getElementById("input").value);
    document.getElementById("urarray").textContent = `Ваш массив: ${userarray}.`;
}

function SortArrayEven(ArrayForSort, EvenArray) { 
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 == 0) {
            EvenArray.push(ArrayForSort[index]);
        }  
    }
    document.getElementById("myevenarray").textContent = `Четные значения: ${evenarray}.`;
}
function SortArrayOdd(ArrayForSort, OddArray){
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 != 0) {
            OddArray.push(ArrayForSort[index]); 
        }  
    }
    document.getElementById("uroddarray").textContent = `Нечетные значения: ${oddarray}.`
}
function FindMaxInArray(Array){
    for (let index = 0; index < Array.length; index++) {
        const element = Array[index];
        let Maxelement = 0;
        if (element > Maxelement) { 
            Maxelement = element;
        }
        document.getElementById("max").textContent = `Максимальное значение: ${Maxelement}.`;
    }
}
function FindMinInArray(Array){
    for (let index = 0; index < Array.length; index++) {
        const element = Array[index];
        let MinElement = Array[0];
        if (element < MinElement) { 
            MinElement = element;
        }
        document.getElementById("min").textContent = `Минимальное значение: ${MinElement}.`;
    }
}
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
    if (i == 0) document.getElementById("rpn").textContent = `Нет пар повторяющихся значений.`
    else document.getElementById("rpn").textContent = `${i} - кол-во пар повторяющихся значений.`
}