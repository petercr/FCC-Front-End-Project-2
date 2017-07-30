
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var arr = str.split(' ');
  var arr2 = arr[arr.length - 1];
  
  if (target === arr2) {
    return true;
    
  }
  else if (target !== arr2) {
    return false;
  }
  else {
    return 'Oh crap';
  }
}

confirmEnding("Bastian", "n");