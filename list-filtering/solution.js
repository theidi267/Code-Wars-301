function filter_list(l) {

  let filtered = [];

  for (i = 0; i < l.length; i++){

    if (typeof l[i] === 'number'){

      filtered.push(l[i]);
    }
  }
  return filtered;
}