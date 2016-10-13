//Sum all the prime numbers up to and including the provided number.

function sumPrimes(num) {
  
  var num_array = [];
  var prime_array = [];
  var result = 0;
  
  for (var x = 2; x <= num; x++) {
    num_array.push(x);
  }
  
  for (var y=0; y<num_array.length; y++) {
    var not_prime = false;
        
    for (var i = 2; i < num_array[y]; i++) {
      
      if (num_array[y] % i === 0) {
        not_prime = true;
      }
      
    }
    if (!not_prime) {
      prime_array.push(num_array[y]);
    }
    
  }
  
  
  for (var z=0; z<prime_array.length; z++) {
    result = prime_array[z] + result;
  }
  
  
  return result;
}

sumPrimes(10);
