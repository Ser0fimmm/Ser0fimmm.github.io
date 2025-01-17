function RandomNumberGnerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}// basic RNG
function FillArray(array, min, max) { 
    for (let index = 0; index < array.length; index++) {
        array[index] = RandomNumberGnerator(min, max) 
    }
}// Fills up empty array with random numbers. \ the array must exist with a certain number of elements. \ examplle: arrray = new Array(n), where n = array lenght
function RandomlyFillArray(array, min, max){
    for (let index = 0; index < array.length; index++) {
        array[index] = Math.floor(Math.random() * (max - min) + min) 
    }
}// does absolutly the same operation as the previous FillArray function, but without using RNG Function. use one of the options, depending on whether you use RNG in your code or not. 
function SortArrayEven(ArrayForSort, EvenArray) { 
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 == 0) {
            EvenArray.push(ArrayForSort[index]);
        }  
    }
} // Sorts array for even numbers to new array
function SortArrayOdd(ArrayForSort, OddArray){
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 != 0) {
            OddArray.push(ArrayForSort[index]); 
        }  
    }
}// Sorts array for not even numbers to new array
function ArraySortForEvenAndOdd(ArrayForSort, EvenArray, OddAray) {
    SortArrayEven(ArrayForSort, EvenArray); 
    SortArrayNotEen(ArrayForSort, OddAray);  
}// Sorts array for even and not even numbers to two new arrays
function FindMaxInArray(Array){
    for (let index = 0; index < Array.length; index++) {
        const element = Array[index];
        let Maxelement = 0;
        if (element > Maxelement) { 
            Maxelement = element;
        }
        return Maxelement;
    }
}// Returns maximum value in Array 
function FindMinInArray(Array){
    for (let index = 0; index < Array.length; index++) {
        const element = Array[index];
        let MinElement = Array[0];
        if (element < MinElement) { 
            MinElement = element;
        }
        return MinElement;
    }
}// Returns minimum value in Array
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
}// returns true if array has repeating numbers and false if it does'nt
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
}// returns the number of pairs of the repeating numbers in array