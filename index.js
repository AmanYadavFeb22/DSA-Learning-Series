// 21) write a function that searches for an element in an array and return index , if the element is not present then return -1
const arr = [5, 8, 6, 4, 7, 1, 0, 2, 3];
function findvalue(num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

const res = findvalue(13);
console.log(res);

// Q2) write a function that return number of negative numbers from an array

const arr1 = [1, 2, -3, -5, -4, 8, -6, 7, 9];
function negativenumber() {
  const newarr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
      newarr.push(arr1[i]);
    }
  }
  return newarr.length;
}
const val=negativenumber()
console.log(val)

// Q3) write a function that return largest number from an array

const arr2= [5, 8, 6, 4, 7, 1, 0, 12, 3];
function largestval(){
   let largest=arr2[0]
   for(let i=0; i<arr2.length;i++){
      if(arr2[i]>largest){
         largest=arr2[i]
      }

   }
   return largest
}
const res1=largestval()
console.log(res1)

// Q3) write a function that return largest number from an array

const arr3= [5, 8, 6, 4, 7, 11, 10, 12, 3];
function smallestval(){
   let smallest=arr3[0]
   for(let i=0; i<arr3.length; i++){
      if(arr3[i]<smallest){
         smallest=arr3[i]
      }

   }
   return smallest
}

const res3=smallestval()
console.log(res3)

// Q4) write a function that return second largest number from an array

const arr4 = [4, 9, 0, 2, 6,5,9, 7, 1]

function secondlar(arr) {
     let largest = arr[0]
     let seclargest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            seclargest = largest
            largest = arr[i]
        }
        else if (arr[i]>seclargest && arr[i] !=largest) {
            seclargest=arr[i]
        }
    }
    return seclargest
}
const res4 = secondlar(arr4)
console.log(res4)