

function squared(n){
   n = n.toString().split('').map(Number)
   const result = n.reduce((a,b) => a + (b*b), 0)
   return result
}



function isHappy(num) {
let res;
do {
 res = squared(num)
 isHappy(res)
console.log(res)
} while (res != 1);
return 'done'
}

isHappy(19)
