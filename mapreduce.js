// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    const result = numbers.map(number => number * number).reduce((acc, val) => acc + val,0);
    return result;
  
  }

