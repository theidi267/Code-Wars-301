function high(x){

  let wordsArray = x.split(' ');

  let lettersWorth = 0;

  let finalstring = '';

  for(let i = 0; i < wordsArray.length; i++){

    var string = wordsArray[i];

    console.log(string);

    let value = 0;

    for(let j = 0; j < string.length; j++){

      value += (string.charCodeAt(j) - 96);
      console.log(lettersWorth);
    }
    if(value > lettersWorth){

      lettersWorth = value;

      finalstring = string;

    }
  }
  return finalstring;
}