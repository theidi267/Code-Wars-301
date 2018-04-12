function insertDash(num) {

  let numArray = Array.from(String(num), Number);

  let newArray = [];

  for (var i=0; i<numArray.length; i++) {

    if(numArray[i]%2 > 0 && numArray[i+1]%2 > 0){

      newArray.push(numArray[i] + '-');
    }

    else newArray.push(numArray[i]);
  }

  return newArray.join('');

}