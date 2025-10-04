// sort the element using insertionSort

let arr = [7, 4,10, 3, 5, 1, 2]
function insertionSort(arr) {
    let n = arr.length
    for (let i = 1; i < n; i++){
        let current = arr[i]
        let prev = i - 1
        while (arr[prev] >current && prev>=0) {
            arr[prev+1] = arr[prev]
            prev=prev-1
        }
        arr[prev+1]=current
       
    }
    return arr
}
console.log(insertionSort(arr))