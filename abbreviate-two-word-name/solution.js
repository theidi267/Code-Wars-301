
function abbrevName(name){

  var nameArr = name.split(' ');

  var firstInitial = nameArr[0].substring(0, 1);
  var lastInitial = nameArr[1].substring(0, 1);

  return (firstInitial + '.' + lastInitial).toUpperCase();

}