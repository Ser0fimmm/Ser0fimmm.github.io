const arr = [5, 6, 7, 8]
console.log(arr[0])

const n = Number(process.argv[2])
const m = Number(process.argv[3])
const v = process.argv[4]
//for (let i = 0; i < n; i++) {
    
 //   console.log(i, m * n)
      
//}
if (n > 0) {
    console.log(`hello`)
}
if (n < 0) {
    console.log(`olleh`)
}
if (n == 0) {
    console.log(`zero`)
}

switch (v) {
    case "+":
        console.log(m + n);
    case "-":
        
        console.log(n - m);
    case "*":
        
        console.log(n * m)
    case "/":
        
        console.log(n / m)
    default: console.log("daun")
}
















