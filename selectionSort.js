// sort the element using selection sort
let arr = [7, 1, 5, 4, 3, 2]
function selectionsort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++){
        let min=i
        for (let j = i+1; j <n; j++){
            if (arr[j] < arr[min]) {
                min=j
            }
        }
            let temp=arr[i]
            arr[i] =arr[min]
            arr[min]=temp
    }
    return arr
}
console.log(selectionsort(arr))