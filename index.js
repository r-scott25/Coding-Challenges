
function solution(str){
  let arr = str.split("");
  let revArr = arr.reverse();
  let newStr = revArr.join("");
  return newStr;
}

console.log(solution("world"));
