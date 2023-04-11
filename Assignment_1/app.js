// *** Assignment # 1 *** //

// Q # 1

// let num1 = prompt("Enter the first number :");
// let num2 = prompt("Enter the second number :");
// if (num1 > num2) {
//     console.log(num1)
// } else {
//     console.log(num2)
// }

// Q # 2
// let num = prompt("Enter a number :");
// if (num > 0) {
//     alert("The sign is +");
// } else {
//     alert("The sign is -")
// }

// Q # 3
// let num1 = prompt("Enter the first number :");
// let num2 = prompt("Enter the second number :");
// let num3 = prompt("Enter the third number :");
// let num4 = prompt("Enter the fourth number :");
// let num5 = prompt("Enter the fifth number :");

// if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
//     console.log(num1)
// } else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
//     console.log(num2)
// } else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
//     console.log(num3)
// } else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
//     console.log(num4)
// } else if (num5 >= num1 && num5 >= num2 && num5 >= num3 && num5 >= num4) {
//     console.log(num5)
// }

// Q # 4
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// Q # 5
// let marks = +prompt("Enter your marks :");
// let total = 100;
// let percentage = marks / total * 100;
// let grade;
// if (percentage < 60) {
//     grade = "F";
// } else if (percentage >= 60 && percentage < 70) {
//     grade = "D";
// } else if (percentage >= 70 && percentage < 80) {
//     grade = "C";
// } else if (percentage >= 80 && percentage < 90) {
//     grade = "B";
// } else if (percentage >= 90 && percentage < 100) {
//     grade = "A"
// }
// console.log(grade);

// Q # 6
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// Q # 7
// let pattern = "";
// for (let i = 1; i <= 5; i++) {
//     for(let j = 0; j < i; j++) {
//         pattern += "*"
//     }
//     pattern += "\n"
// }
// console.log(pattern);