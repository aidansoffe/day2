 function maxSubArray(nums) {
    let current = 0
    let maxSum = 0
    for (let index = 0; index < nums.length; index++) {
      cSum = nums[index]
      current = Math.max((cSum + current), 0)
      maxSum = Math.max(maxSum, current)
    }
    return maxSum
};

 maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
 
 //Output: 6


// This logic is wrong but passed all tests

  function maxSubArray(nums) {
   
 let current = 0
  let maxSum = nums[0]
  nums.forEach((idx, num) => {
    current = Math.max(idx, current + idx)
    maxSum = Math.max(maxSum, current)
  })
  return maxSum
};

 maxSubArray([-4])
 
 //Output:-4
