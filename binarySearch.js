// search an element using binary search

let arr = [-1, 0, 3, 5, 9, 12]
function search(arr, target) {
    let i = 0
    let j = arr.length - 1
    while (j >= i) {
    let m = Math.floor((i + j) / 2)
        if (target == arr[m]) {
            return m
        }
        else if (target < arr[m]) {
           j = m - 1
        }
        else {
            i = m + 1
        }

    }

     return -1
    
}

console.log(search(arr, 9))