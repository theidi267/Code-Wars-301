function find_average(array) {

  let avg = array.reduce((accumulator, value) => {

    return value + accumulator;
  }, 0);

  return avg/array.length;
}
