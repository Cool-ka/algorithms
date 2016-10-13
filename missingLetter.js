//Find the missing letter in the passed letter range and return it.

function fearNotLetter(str) {
  var letter;
  
    for(var i=0; i<str.length; i++) {
      
      
        if((i+1) == str.length) {
           return;
        }
      
        if((str.charCodeAt(i+1) - str.charCodeAt(i)) != 1) {
          var number = str.charCodeAt(i+1);
          letter = String.fromCharCode(number -1);
          break;
          
        } 
        

      }
    
    
  return letter;
}

fearNotLetter("abce");
