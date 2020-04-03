
function squared(n){
  
   n = n.toString().split('').map(Number)
   const result = n.reduce((a,b) => a + (b*b), 0)
   return result
}



function isHappy(num, counter = 0) {
 
let value = squared(num);

    if(value == 1){
      return true
    }

    if(counter > 10){
      return false
    }

 if (value != 1) {
   return isHappy(value, counter += 1)
    } 
    

}
