//Q1) find duplicate elements from an unsorted array
let arr = [1, 2, 3, 2, 5, 7, 8, 2, 5, 4, 2, 6, 5, 7, 8, 4, 2];
function findduplicate(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && i != j) {
        if (!res.includes(arr[i])) {
          res.push(arr[i]);
        }
      }
    }
  }
  return res;
}
let duplicate = findduplicate(arr);
console.log(duplicate);

