// Best time to buy and sell stock -leetcode problem
let arr = [7, 1, 5, 3, 6, 4]
function maxprofit(arr){
    let min = arr[0]
    let maxp = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i]
            
        }
        if (maxp < arr[i] - min) {
            maxp=arr[i]-min
        }
       
    }
    return maxp
}

let val = maxprofit(arr)
console.log(val)