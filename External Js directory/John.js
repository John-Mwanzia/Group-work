let personName = "John Mwanzia";
let regNo = "CS/MG/3163/09/21";


document.addEventListener('DOMContentLoaded', function() {
    // Get the <h1> element by its id
    let detailsElement = document.getElementById('details');
  
    // Set the text content of the <h1> element to the person's name
    detailsElement.textContent = personName;
  });

// document.getElementById("details").innerHTML = personName + "<br>" + regNo;



// code to find the largest between two numbers
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else {
  console.log(`${num2} is greater than ${num1}`);
}

// code to find the largest between three numbers usingg nested if statements

let num3 = 10;
let num4 = 20;
let num5 = 30;
if (num3 > num4) {
  if (num3 > num5) {
    console.log(`${num3} is the greatest`);
  } else {
    console.log(`${num5} is the greatest`);
  }
} else {
  if (num4 > num5) {
    console.log(`${num4} is the greatest`);
  } else {
    console.log(`${num5} is the greatest`);
  }
}

//code to display the day of the week using if else ladder

let day = prompt("Enter a number between 1 and 7");
if (day == 1) {
  console.log("Sunday");
} else if (day == 2) {
  console.log("Monday");
} else if (day == 3) {
  console.log("Tuesday");
} else if (day == 4) {
  console.log("Wednesday");
} else if (day == 5) {
  console.log("Thursday");
} else if (day == 6) {
  console.log("Friday");
} else if (day == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid day");
}

// code to display the day of the week using switch case

let dayofweek = prompt("Enter a number between 1 and 7");
switch (dayofweek) {
  case "1":
    console.log("Sunday");
    break;
  case "2":
    console.log("Monday");
    break;
  case "3":
    console.log("Tuesday");
    break;
  case "4":
    console.log("Wednesday");
    break;
  case "5":
    console.log("Thursday");
    break;
  case "6":
    console.log("Friday");
    break;
  case "7":
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
    break;
}


//code to find the sum of 1-10 using for loop

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
    }
console.log(sum);

//code to find the sum of 1-10 using while loop

let sum2 = 0;
let a = 1;
while (a <= 10) {
    sum2 += a;
    i++;
    }
console.log(sum2);

//code to find the sum of 1-10 using do while loop

let sum3 = 0;
let c = 1;
do {
    sum3 += c;
    i++;
    }
while (c <= 10);
console.log(sum3);

