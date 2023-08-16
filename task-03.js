function findMax(...args) {
    let numbers = [];
    args.forEach(arg => {
      if (Array.isArray(arg)) {
        numbers = numbers.concat(arg);
      } else {
        numbers.push(arg);
      }
    });
    const max = Math.max(...numbers);
    return max;
  }
  console.log(findMax(1, 4, 2, 8, 5));            
  console.log(findMax([1, 4, 2], 8, 5));       
  console.log(findMax(1, 4, [2, 8, 5]));          

  