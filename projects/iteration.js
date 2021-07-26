function counting () {
  let number =1
while (number <= 10){
 alert (number)
 number +=1
}
}

function squareSeries () {
  let endNum = prompt ('What is a end number?')
let outputSeries = ''
let squareNum =1
while (squareNum <=endNum) {
 outputSeries += squareNum **2
 outputSeries += ','
squareNum +=1
}
alert ('squareSeries of ' + endNum + ' is ' + outputSeries)
}

function factorial () {
  let multipliedNum = prompt('Enter a number to be multiplied') 
  let facResult = multipliedNum
  let nextMul = facResult - 1
  while (nextMul > 1) {
    facResult = facResult * nextMul
    nextMul -= 1
  }
  alert('The factorial number is ' + facResult)
}

function fibonacci () {
  let finishNum = prompt ('Enter a number')
let output = ''
let currentNum =1
let prevNum =1

while (currentNum <= finishNum) {
  currentNum = currentNum + prevNum
  prevNum = currentNum - prevNum
  output += ',' + currentNum
}
alert ('The finish number is 1,1' + output)
}