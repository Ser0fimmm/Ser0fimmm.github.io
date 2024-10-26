// принцип работы списка и вывода значений из него
let arr = [3,4,5,6,7,8];

let num1 = 5;
let str1 = "привет";
                     // т.к минимальное число индекса - 0 :
console.log(arr[0]); // выведет 1-е число из списка arr
console.log(arr[2]); //выведет 3-е число из списка arr
//сделае 2 переменную со списком
let arr2 = ["раз","два","три","четыре", 5, 6, 7, true] //список может содержать одновременно все типыданных
console.log(arr2[2]); //выведет "три"
console.log(arr2.length); //выведет количество данных списка
for(let index = 0; index < arr2.length; index++) {
    console.log(arr2[index]) //выведет вседанные что есть в списке
} //пробуем вывести деталь из тетриса
let arr_double = [
    [0,1,0],
    [1,1,1],
    [0,0,0]
]
//for(let i_str = 0; i_str < arr_double[i_str].length; i_str++) {
 //   let str = ``;
//    for(let i_col = 0; i_col < arr_double[i_str].length; i_col++){
//       str += (arr_double[i_str][i_col])
//     }
//     console.log(`${str}`);
//     str = ``;
//}
function rotate_right(n){ // n то над чем будет работать функция
    n[2][1] = 1;
    n[1][0] = 0;
}

rotate_right(arr_double);

function show_figur(){
    for(let i_str = 0; i_str < arr_double[i_str].length; i_str++) {
        let str = ``;
        for(let i_col = 0; i_col < arr_double[i_str].length; i_col++){
           str += (arr_double[i_str][i_col])
         }
         console.log(`${str}`);
         str = ``;
    }
}
show_figur(arr_double)
