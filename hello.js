// First Javascript program
console.log('hello world')

// Exercise 1

let firstVariable
let secondVariable
firstVariable = 2
secondVariable = 3
let sumVariable = firstVariable + secondVariable
console.log("The sum of first and second variable is: " + sumVariable)

// Exercise 2

let thirdVariable = 6
let productVariable = firstVariable * thirdVariable
let quotientVariable = thirdVariable / secondVariable
let remainderVariable = secondVariable % firstVariable
console.log("The product of first and third variable is: " + productVariable)
console.log("The quotient is: " + quotientVariable)
console.log("The remainder is: " +remainderVariable)


//Exercise 3

let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4
let num5 = 5
let num6 = 6
let num7 = 7
let num8 = 8
let num9 = 9
let num10 = 10

let sumFirstFive = (num1 + num2 + num3 + num4 + num5)
let averageFirstFive = sumFirstFive/5

let sumLastFive = (num6 + num7 + num8 + num9 + num10)
let averageLastFive = sumLastFive/5

let finalAverage = (averageFirstFive + averageLastFive)/2

console.log("The average of first five variables is: " + averageFirstFive)
console.log("The average of last five variable is: " + averageLastFive)
console.log("The average of first two averages is: " + finalAverage)

// Exercise 4

//first average

var arr1 = [4, 10, 22, -30, 55];

var totalSum1 = 0;
for(i = 0; i <= arr1.length; i++){
     totalSum1 += arr1[i];
}
var arrCount1 = arr1.length;

var average1 = totalSum1/arrCount1;


// second average
var arr2 = [68, 7, -22, 9, 100]

var totalSum2 = 0
for(j = 0; j <= arr2.length; j++){
     totalSum2 += arr2[i]
}
var arrCount2 = arr2.length

var average2 = totalSum2/arrCount2

// average of average1 and average2

var sumAverages = average1 + average2
var averageOfAverages = sumAverages/2

console.log("The average of first array is: " + average1)
console.log("The average of second array is: " + average2)
console.log("The average of above averages is: " + averageOfAverages)