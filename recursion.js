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

