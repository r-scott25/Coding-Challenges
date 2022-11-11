function getPlanetName(id){
  var name;
  switch(id){
    case 1: name = 'Mercury';
    break;
    case 2: name = 'Venus';
    break;
    case 3: name = 'Earth';
    break;
    case 4: name = 'Mars';
    break;
    case 5: name = 'Jupiter';
    break;
    case 6: name = 'Saturn';
    break;
    case 7: name = 'Uranus';
    break;
    case 8: name = 'Neptune';
    break;
  }
   
  
  return name;
}
console.log(getPlanetName(1));
console.log(getPlanetName(2));
console.log(getPlanetName(3));
console.log(getPlanetName(4));
console.log(getPlanetName(5));
console.log(getPlanetName(6));
console.log(getPlanetName(7));
console.log(getPlanetName(8));