let day = 15;

if (day >= 1 && day <= 10) {
  console.log('Первая декада месяца');
} else if (day >= 11 && day <= 20) {
  console.log('Вторая декада месяца');
} else if (day >= 21 && day <= 31) {
  console.log('Третья декада месяца');
} else {
  console.log('Некорректное число');
}