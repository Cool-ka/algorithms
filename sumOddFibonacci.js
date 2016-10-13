//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.


function sumFibs(num) {
  var array = [1,1];
  var odd_array = [1,1];
  var sum;
  var result = 0;
  
  for (var i=0; i<num; i++) {
    sum = array[i] + array[i+1];
    if (sum <= num) {
      array.push(sum);
      if(sum % 2 !== 0) {
        odd_array.push(sum);
      }
    } else {
      break;
    }
   
  }
  
   
  
  for (var x=0; x<odd_array.length; x++) {
    result = odd_array[x] + result;
  }
  
  
  return result;
}

sumFibs(4);
