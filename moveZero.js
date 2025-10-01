// Move al  zeroes to end 

let arr = [0, 1, 0, 3, 12]
function movezero(arr) {
    let x=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != 0) {
            arr[x]=arr[i]
            x=x+1
        }
       
    }
    while (x < arr.length) {
        arr[x] = 0
    x++
   }
    return arr
}
let res = movezero(arr)
console.log(res)