// Count the number of digit in a number

let count = 0
function digit(n) {
    if (n == 0) {
        return 1
    }
    //Handling negative numbers
    n=Math.abs(n)
    while (n > 0) {
        n = Math.floor(n/10)
        count++
    }
    return count
}
let num = digit(4578)
console.log(num)