//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

/* <!DOCTYPE HTML>
<html>
<body>
    <p>Script start</p>
<script>
let number = 2;
let exp = 10;
let result = 1;
for (let i = 0; i < exp; i++) {
    result = result * number;
}
console.log(result);
</script>
<p>Script finished</p>
</body>
</html> */


//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
/* function power(number, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result = result * number;
    }
    return (result);
}
console.log(power(2, 10)); */

//-----------------------------------------------------------
/* 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):) */


//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)

/* function printSmile(smile, lines) {
    let empty_str = " ";
    for (let i = 0; i < lines; i++) {
        empty_str += smile;
        console.log(empty_str);
    }
}
printSmile(";)", 5) */

//---------------------------------------------------------------------------------------------------------------

//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв
//Проверки: 'case', 'Case', 'Check-list'

/* function getWordStructure(word) {
    let counter_vowels = 0;
    let counter_cons = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            counter_vowels += 1;
        } else {
            counter_cons += 1;
        }
    }
    console.log("Слово " + word + " состоит из " + counter_vowels + " гласных и " + counter_cons + " согласных букв");
}
getWordStructure('Check-list'); */

//---------------------------------------------------------------------

//4**. Написать функцию, которая проверяет, является ли слово палиндромом
//e.g. function isPalindrom(word)
//Проверки: 'abba', 'Abba' */

/* function isPalindrome(str) {
  return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
}


function isPalindrome(word) {
  word.toLowerCase()
  for (let i = 0; i < word.length / 2; i++) {
      if (word[i] == word[word.length - i - 1]) {
          console.log(true);
      } else {
          console.log(false);
      }
  }
}
isPalindrome('addssdda'); */