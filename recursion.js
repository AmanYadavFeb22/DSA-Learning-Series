// Q1) print your name n times using recursion


let count = 1
function printName(n,name) {
    if (count>n) {
        return
    }
    console.log('Hello '+ name)
    count++
    printName(n,name)
}
printName(5,'aman')


// Q2)Print linearly from 1 to N using recursion

let count1=1
function printNumber(count,n) {
  if (count > n) {
    return
  }
  console.log(count)
  printNumber(count+1,n)
}
printNumber(count1,5)


// Q3)Print linearly from N to 1 using recursion


function printNumberRev(n) {
  if (n==0) {
    return
  }
  console.log(n)
  
  printNumberRev(n-1)
}
printNumberRev(5)


//Q4) Print number from 1 to N using Backtracking

function printNumberBack(count,n) {
  if (count<1) {
    return
  }
  printNumberBack(count-1,n)
  console.log(count)
  
}
printNumberBack(5,5)


//Q5) Print number from N to 1 using Backtracking


function printNumberBackRev(count,n) {
  if (count>n) {
    return
  }
  printNumberBackRev(count+1,n)
  console.log(count)
  
}
printNumberBackRev(1,5)


//Q6) print sum of n natural number using recursion

let sum=0
function calsum(count,n) {
  {
    if (count > n) {
      return
    }
    sum = sum + count
    count++
    calsum(count, n)

  }
return sum
}

let res=calsum(1, 10)
console.log(res)


//Q7) Print factorial of n number using recursion

let mul=1
function calmul(count, n) {
  {
    if (count > n) {
      return 0
    }
    mul = mul * count
    count++
    calmul(count, n)

  }
  return mul
}
let result = calmul(1, 5)
console.log(result)


//Q8) Reverse a array using recursion

let arr = [1, 2, 3, 4, 5, 6]

let newarr=[]
function revArr(count, arr) {
  {
    if (count >= arr.length) {
      return
    }
    revArr(count + 1, arr)
    newarr.push(arr[count])
  }
  return newarr
}

let revres=revArr(0,arr)
console.log(revres)


// Checking a string is Palindrome or not

function isPalindrome(i,name) {
  if (i >= name.length / 2) {
    return true
  }
  if (name[i] != name[name.length - 1 - i]) {
    return false
  }
  return isPalindrome(i+1,name)
}
let result1 = isPalindrome(0,'amanmma')
console.log(result1)

// Multiple recursion call i.e fibonacci series

function calfibonacci(n) {
  if (n <= 1) {
    return n
  }
  let last = calfibonacci(n - 1)
  let seclast = calfibonacci(n - 2)
  return last +seclast
}
let result2 = calfibonacci(6)
console.log(result2)