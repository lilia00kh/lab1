"use strict";

let arr = [4, 2, 3, 1, 10, 14, 9];
let arr2 = [1, 3, 4, 1, 1, 3, 4, 5];
let str1 = "is";
let n = 3;

const {insertionSort} = require('./taskTree');
const { frequency,max} = require('./taskFour');
const { countOfDays} = require('./taskFive');
const { insertString} = require('./taskTwo');
const {hexadecimalNumber} = require('./taskOne');
const {} = require('./taskSeven');

//Шістнадцяткове число

let hexString=hexadecimalNumber();
console.log("\nШістнадцяткове число: "+hexString);

//Сортування вставкою
console.log("\nНаписати функцію, яка посортує масив вставкою");
console.log(`Невідсортований масив: ${arr}`);
let newArr= insertionSort(arr);
console.log("Відсортований масив:"+newArr);

//елемент із найбільшою частотою повторень
console.log("\nЗнайти елемент із найбільшою частотою повторень.");
console.log("Масив: " + arr2);
let p =frequency(arr2);
console.log("Елемент з максимальною частотою: " + p);

//Кілкість днів,які пройшли від початку року

let daysGo=countOfDays();
console.log("\nКількість днів, яка пройшла від початку року: "+daysGo);

//Написати функцію, яка вставить стрічку у відповідну позицію іншої стрічки
console.log("\nВставити стрічку у відповідну позицію іншої стрічки");
let str = "It  my string";
let str2=insertString(str,n,str1);
console.log(str2.join(''));

