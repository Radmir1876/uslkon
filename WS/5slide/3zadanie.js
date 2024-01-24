'if:'

let lang = 'ru';
let arr;

if (lang === 'ru') {
  arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
} else if (lang === 'en') {
  arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}

console.log(arr);


'switch:'

let lang = 'ru';
let arr;

switch (lang) {
  case 'ru':
    arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    break;
  case 'en':
    arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    break;
  default:
    arr = [];
}

console.log(arr);
 

'без if и switch:'

let lang = 'ru'; 
let daysOfWeek = [
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

let arr = daysOfWeek[lang === 'ru' ? 0 : 1];

console.log(arr);