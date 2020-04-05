function moveZeroes(array) {
  if (!array.includes(0)) {
    return array
  }

   
  let counter = 0
  for (let i = array.length-1; i >= 0 ; i--) {
    if (array[i] === 0) {
      counter++
      array.splice(i, 1)
    }
  }

  for (let k = 0; k < counter; k++) {
    array.push(0)
  }

  return array;
};


moveZeroes([0, 0 , 1])
