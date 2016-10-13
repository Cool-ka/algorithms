//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  var re = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase();
  return re;
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
}

spinalCase('This Is Spinal Tap');
