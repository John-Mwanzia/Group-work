var personName = 'Almond Kiruthu. M';
var regNumber = 'CS/MG/1970/09/21';

//Write js code to find the largest among two numbers using the if-esle statement
var num1 = 10;
var num2 = 20;
if (num1 > num2) {
  console.log('num1 is greater than num2');
} else {
  console.log('num2 is greater than num1');
}

//Write js code to find the largest among three numbers using the NESTED if statement
var num3 = 10;
var num4 = 20;
var num5 = 30;
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
var day = prompt('Enter a number between 1 and 7');
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
var yourDay = prompt('Enter a number between 1 and 7');
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
var sum = 0;
for (var i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

//Write a js code to find the sum of number 1-10 using a while-statement
var total = 0;
var i = 1;
while (i <= 10) {
  sum += i;
  i++;
}

return sum;
console.log(sum);

//Write a js code to find the sum of number 1-10 using a do-while-statement
var sumOfNums = 0;
var i = 1;
do {
  sum += i;
  i++;
} while (i <= 10);

return sumOfNums;
console.log(sumOfNums);
