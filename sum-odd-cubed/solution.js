function cubeOdd(arr) {
  console.log(arr);
  if(arr.length === 0){

    return undefined;
  }
  let cube = arr.map(x => Math.pow(x, 3));

  if ((cube.includes(NaN)) || (arr.length === 0)) {

    return undefined;
  }
  else return cube.filter(x => x%2!==0).reduce((accumulator, value) => accumulator+value);
}