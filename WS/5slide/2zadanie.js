let min = 33; 

if (min >= 0 && min < 15) {
  console.log('Первая четверть часа');
} else if (min >= 15 && min < 30) {
  console.log('Вторая четверть часа');
} else if (min >= 30 && min < 45) {
  console.log('Третья четверть часа');
} else if (min >= 45 && min <= 59) {
  console.log('Четвертая четверть часа');
} else {
  console.log('Некорректное число');
}

"(&& = И)"