let personName = 'Almond Kiruthu. M';
let regNumber = 'CS/MG/1970/09/21';

document.getElementById('myDetails').innerHTML =
  personName + '<br /> ' + regNumber;

//Write js code to find the largest among two numbers using the if-esle statement
// let num1 = prompt('Enter the first number');
// let num2 = prompt('Enter the second number');
if (num1 > num2) {
  console.log('num1 is greater than num2');
} else {
  console.log('num2 is greater than num1');
}

//Write js code to find the largest among three numbers using the NESTED if statement
// let num3 = prompt('Enter the first number');
// let num4 = prompt('Enter the second number');
// let num5 = prompt('Enter the third number');
if (num3 > num4) {
  if (num3 > num5) {
    console.log('num3 is the largest');
  } else {
    console.log('num5 is the largest');
  }
} else {
  if (num4 > num5) {
    console.log('num4 is the largest');
  } else {
    console.log('num5 is the largest');
  }
}

//Write js code to diplay the day of the week using if-else ladder
// let day = prompt('Enter a number between 1 and 7');
if (day == 1) {
  console.log('Sunday');
} else if (day == 2) {
  console.log('Monday');
} else if (day == 3) {
  console.log('Tuesday');
} else if (day == 4) {
  console.log('Wednesday');
} else if (day == 5) {
  console.log('Thursday');
} else if (day == 6) {
  console.log('Friday');
} else if (day == 7) {
  console.log('Saturday');
} else {
  console.log('Invalid day');
}

//Write js code to diplay the day of the week using switch-case statement
// let yourDay = prompt('Enter a number between 1 and 7');
switch (yourDay) {
  case '1':
    console.log('Sunday');
    break;
  case '2':
    console.log('Monday');
    break;
  case '3':
    console.log('Tuesday');
    break;
  case '4':
    console.log('Wednesday');
    break;
  case '5':
    console.log('Thursday');
    break;
  case '6':
    console.log('Friday');
    break;
  case '7':
    console.log('Saturday');
    break;
  default:
    console.log('Invalid day');
    break;
}

//Write a js code to find the sum of number 1-10 using a for-statement(Loop)
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

//Write a js code to find the sum of number 1-10 using a while-statement
let total = 0;
let b = 1;
while (b <= 10) {
  sum += b;
  b++;
}

console.log(sum);

//Write a js code to find the sum of number 1-10 using a do-while-statement
let sumOfNums = 0;
let c = 1;
do {
  sum += c;
  c++;
} while (c <= 10);

console.log(sumOfNums);
