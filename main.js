
const {arr} = require('./vars');
const {arr2} = require('./vars');
const {str1} = require('./vars');
const {n} = require('./vars');
const {insertionSort} = require('./taskTree');
const { frequency,max} = require('./taskFour');
const { countOfDays} = require('./taskFive');
const { insertString} = require('./taskTwo');
const {hexadecimalNumber} = require('./taskOne');
const {} = require('./taskSeven');

//Шістнадцяткове число
hexadecimalNumber();

//Сортування вставкою
insertionSort(arr);

//елемент із найбільшою частотою повторень
frequency(arr2);

//Кілкість днів,які пройшли від початку року
countOfDays();

//Написати функцію, яка вставить стрічку у відповідну позицію іншої стрічки

insertString(n,str1);

