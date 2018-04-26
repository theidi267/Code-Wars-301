function mutateMyStrings(stringOne, stringTwo){

  let arrOne = stringOne.split('');

  let arrTwo = stringTwo.split('');

  let transformed = [arrOne.join('')];

  for (i = 0; i < arrOne.length; i++) {

    if (arrOne[i] !== arrTwo[i]) {

      arrOne[i] = arrTwo[i];

      transformed.push(arrOne.join(''));
    }
  }
  return transformed.join('\n') + '\n';
}
