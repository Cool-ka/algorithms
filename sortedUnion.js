//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr) {
      
  var array = Array.from(arguments);
  
  var flattened = array.reduce(function(a, b) {
  return a.concat(b);
}, []);
  
  var uniq = flattened.reduce(function(a,b){
    
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
  
  
  
  
  
  
  
  return uniq;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
