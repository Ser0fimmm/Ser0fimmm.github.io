let userarray = []
let evenarray = []
let rngevenarray = []
let oddarray = []
let rngoddarray =[]
let rnsarray =[]

let repeatingpairs = 0



function addnum() {
    
    userarray.push(document.getElementById("input").value);
    document.getElementById("urarray").textContent = `Ваш массив: ${userarray}.`;
}

function SortArrayEven() { 
    let conf = confirm("OK, если свой массив | NO / Отмена, если случайный массив");
    if (conf == true) {
        for (let index = 0; index < userarray.length; index++) {
            const element = userarray[index];
            if (element % 2 == 0) {
                evenarray.push(userarray[index]);
            }  
        }
        document.getElementById("myevenarray").textContent = `Четные значения: ${evenarray}.`;
    }
    else if (conf == false) {
        for (let index1 = 0; index1 < rngarray.length; index1++) {
            const element1 = rngarray[index1];
            if (element1 % 2 == 0) {
                rngevenarray.push(rngarray[index1]);
            }  
        }
        document.getElementById("randomeven").textContent = `Четные значения: ${rngevenarray}.`;
    }
    
}
function SortArrayOdd(){
    let conf = confirm("OK, если свой массив | NO / Отмена, если случайный массив");
    if (conf == true) {
        for (let index = 0; index < userarray.length; index++) {
            const element = userarray[index];
            if (element % 2 != 0) {
                oddarray.push(userarray[index]); 
            }  
        }
        document.getElementById("uroddarray").textContent = `Нечетные значения: ${oddarray}.`
    }
    else if (conf == false) {
        for (let index1 = 0; index1 < rngarray.length; index1++) {
            const element1 = rngarray[index1];
            if (element1 % 2 != 0) {
                rngoddarray.push(rngarray[index1]); 
            }  
        }
        document.getElementById("rngoddarray").textContent = `Нечетные значения: ${rngoddarray}.`
    }
}
function FindMaxInArray(){
    let conf = confirm("OK, если свой массив | NO / Отмена, если случайный массив");
    if (conf == true) {
        maximum = Math.max.apply(null, userarray);
        document.getElementById("max").textContent = `Максимальное значение: ${maximum}.`;
    }
    else if (conf == false) {
        maximum1 = Math.max.apply(null, rngarray);
        document.getElementById("maxrng").textContent = `Максимальное значение: ${maximum1}.`;
}
}
function FindMinInArray() {
    let conf = confirm("OK, если свой массив | NO / Отмена, если случайный массив");
    if (conf == true) {
        for (let index = 0; index < userarray.length; index++) {
            const element = userarray[index];
            let MinElement = userarray[0];
            if (element < MinElement) { 
                MinElement = element;
            }
            document.getElementById("min").textContent = `Минимальное значение: ${MinElement}.`;
        }
    }
    if (conf == false){
        for (let index = 0; index < rngarray.length; index++) {
            const element = rngarray[index];
            let MinElement = rngarray[0];
            if (element < MinElement) { 
            MinElement = element;
            }
            document.getElementById("minrng").textContent = `Минимальное значение: ${MinElement}.`;
    }
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

let usermin 
let usermax
let useramount

let rngarray 

function RandomNumberGnerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function FillArray(array, min, max) {
    for (let index = 0; index < array.length; index++) {
        array[index] = RandomNumberGnerator(min, max) 
        
    }
}

function randomarray() {
    if (document.getElementById("randomarray").textContent = "Сгенерировать") {
        usermin = +prompt("Введите минимальное значение");
        usermax = +prompt("ВВедите максимальное значение");
        useramount = +prompt("Введите количество элементов массива");
        rngarray = new Array(useramount);
        FillArray(rngarray, usermin, usermax);
        document.getElementById("rngarray").textContent = `Сгенерированный массив: ${rngarray}`;
        document.getElementById("randomarray").textContent = "Сгенерировать новый";
    }
    else {
        usermin = +prompt("Введите минимальное значение");
        usermax = +prompt("ВВедите максимальное значение");
        useramount = +prompt("Введите количество элементов массива")
        rngarray = new Array(useramount);
        FillArray(rngarray, usermin, usermax);
        document.getElementById("rngarray").textContent = `Сгенерированный массив: ${rngarray}`
    }
}
