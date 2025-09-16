// Checking a number is palindrome or not

let rev =0
function reverse(n) { 
   if (n < 0) {
      return false
   }
   let copyn = n

   while (n>0) {
    let rem = n %  10
    rev = rev*10 + rem
      n = Math.floor(n/10)
    
   }
   if (rev == copyn) {
      return true
   }
   else {
      return false
   }
}

const isPalindrome = reverse(123321)
console.log(isPalindrome)