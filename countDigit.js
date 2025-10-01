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


// Count maximum consecutive one
let arr = [1,1,0,1,1,1]
function countone(arr) {
    let count = 0
    let current=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 1) {
            current++
            
        
        }
        else {
            count = Math.max(current,count)
            current=0
        }
       
    }
    return Math.max(current,count)
}
let val = countone(arr)
console.log(val)