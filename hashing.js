//Q1) Find the frequency of element in a array 
let arr = [1, 2, 5, 1,6, 4, 6, 2]
let hash={}
for (let i = 0; i < arr.length; i++){
  if (hash[arr[i]]) {
    hash[arr[i]]+=1
  }
  else {
    hash[arr[i]]=1
  }

}
console.log(hash)


//Q2) Find frequency of element using map

let arry = [1, 2,12, 3, 1, 2, 4, 3, 5];
let hash1 = new Map();

for (let i = 0; i < arry.length; i++) {
  if (hash1.has(arry[i])) {
    hash1.set(arry[i], hash1.get(arry[i]) + 1);
  } else {
    hash1.set(arry[i], 1);
  }
}

console.log(hash1);