function capitalize(s,arr){

  var arrStr = s.split('');

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] > arrStr.length) {

      break;

    }
    arrStr[arr[i]] = arrStr[arr[i]].toUpperCase();
  }
  s = arrStr.join('');

  return s;
}