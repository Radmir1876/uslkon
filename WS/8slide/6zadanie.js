let str = '123321';

let sumFirstThree = Number(str.charAt(0)) + Number(str.charAt(1)) + Number(str.charAt(2));
let sumLastThree = Number(str.charAt(3)) + Number(str.charAt(4)) + Number(str.charAt(5));

if (sumFirstThree === sumLastThree) {
  console.log('да');
} else {
  console.log('нет');
}