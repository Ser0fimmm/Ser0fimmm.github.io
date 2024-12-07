function RandomNumberGnerator(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}// RNG
function FillArray(array, min, max) { 
    for (let index = 0; index < array.length; index++) {
        array[index] = RandomNumberGnerator(min, max) 
    }
}// Fills up empty array with random numbers
function SortArrayEven(ArrayForSort, EvenArray,) { 
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 == 0){
            EvenArray.push(ArrayForSort[index]);
        }  
    }
} // Sorts array for even numbers to new array
function SortArrayNotEen(ArrayForSort,NotEvenArray){
    for (let index = 0; index < ArrayForSort.length; index++) {
        const element = ArrayForSort[index];
        if (element % 2 != 0){
            NotEvenArray.push(ArrayForSort[index]); 
        }  
    }
}// Sorts array for not even numbers to new array
function ArraySortForEvenAndNotEven(ArrayForSort, EvenArray,NotEvenAray) {
    SortArrayEven(ArrayForSort,EvenArray); 
    SortArrayNotEen(ArrayForSort,NotEvenAray);  
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