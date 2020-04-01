
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = []
    var obj = {}
  for(var i = 0; i < nums.length; i++){
      var count = nums[i]
      if(obj[count] === undefined){
          obj[count] = 1
      }else {
          obj[count]++
      }
     }
    
    for(item in obj) {
  if(obj[item]  === 1){
    result.push(item)
  }
}
return result
};
