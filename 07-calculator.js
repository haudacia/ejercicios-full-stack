const multiply = function(arrayOfNumbers) {
    let mult = 1;
    for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
      mult = mult * arrayOfNumbers[i];
    } return mult;
  };

  // but then i found out about reduce method
  