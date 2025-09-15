// Q1) Print the star patttern
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 0; j < 5; j++) {
    star = star + " * ";
  }
  console.log(star);
}

// Q2) Print the star patttern
// *
// * *
// * * *
// * * * *

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + " * ";
  }
  console.log(row);
}

// Q3) Print the above patttern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + " " + j;
  }
  console.log(row);
}


// Q4) Print the above patttern
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + " " + i;
  }
  console.log(row);
}


// Q5) Print the above patttern
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function nloop(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= n-i+1; j++) {
            row = row + " " + j
        }
        console.log(row)
    }
}
nloop(5)

// Q6) Print the above patttern
//       *
//     * *
//   * * *
// * * * * 
function nloop1(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= n-i; j++) {
            row = row + "  " 
        }
        for (let k = 1; k <= i; k++) {
            row = row +" *" 
        }
        console.log(row)
    }
}
nloop1(5)


// Q7) Print the above patttern
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
function nloop2(n) {
    for (let i = 1; i <= n; i++) {
        let row = " "
        let num=1

        for (let j = 1; j <= i; j++) {
            row = row + ' ' + num
            if (num == 1) {
                num=0
            }
            else {
                num=1
            }
        }
       
        console.log(row)
    }
}
nloop2(5)


// Q8) Print the above patttern
// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1
function nloop3(n) {
        let num=1
    for (let i = 1; i <= n; i++) {
        let row = " "

        for (let j = 1; j <= i; j++) {
            row = row + ' ' + num
            if (num == 1) {
                num=0
            }
            else {
                num=1
            }
        }
       
        console.log(row)
    }
}
nloop3(5)