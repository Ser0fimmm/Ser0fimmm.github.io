array = [32, 45, 21, 4, 8, 87, 0, 5, 80, 11]

function SumArrayElementsFromAToB (array, a, b) { 
    let sum = 0;
    const c = Math.max(a,b);
    const d = Math.min(a,b);
    for (let index = d; index <= c; index++) {
            const element = array[index];
            sum += element;
    }
    return sum;
}
let  x = SumArrayElementsFromAToB(array, 3, 5)
console.log(x)