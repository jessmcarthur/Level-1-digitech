function conversation() {
  alert('Welcome to my conversation program.')
  alert('Do you like cycling? Answer yes or no.')
  let answer = prompt()
  if (answer == 'yes') {
    alert("That's good - you will get very fit.")
  } else {
    alert('Perhaps you like some other sport.')
  }
  alert('Goodbye')
}

function mealPlanner() {
  alert('Meal planner.')
  alert('1. Chicken curry.')
  alert('2. Veggie lasagne.')
  alert('3. Burger and salad.')
  alert('Which of these meals is your favourite? (1, 2, or 3).')
  let answer = prompt()
  if (answer == '1') {
    alert('Chicken curry, coming up.')
  } else if (answer == '2') {
    alert('Veggie lasagne, coming up.')
  } else {
    alert('Burger and salad, coming up.')
  }
  alert('Enjoy!')
}

function moreThan () {
  	let checkNum =10
  let numTwo =2
  if (checkNum > numTwo) {
    alert ('The number is bigger')
  } else {
    alert('The number is smaller')
  }
}

function drivingAge() {
  	let age = prompt('What is your age?')
  age = Number(age)
  if (typeof(age) == 'number') {
    if (age > 0 && age < 150) {
      if (age > 15) {
        alert('you can drive')
      } else { 
        alert('you cannot drive')
      }
    } else {
        alert('Error:invalid age')
    }
  } else {
    alert('Error:bad input')
  } 
}

function calculator() {
  let firstNum = prompt ('Type a number')
firstNum = Number (firstNum)
let secondNum = prompt ('Type another number')
secondNum = Number (secondNum)
let operator = prompt ('Type a operator e.g. +')

  if (operator == '+') {
  alert(firstNum + secondNum)
  } else if (operator == '-') {
  alert(firstNum - secondNum)
  } else if (operator == '*') {
    alert (firstNum * secondNum)
  } else if (operator == '/') {
    alert (firstNum / secondNum)
  }
}

function capital() {
  let name = prompt ('What is your name?')
let capital = prompt ('Hi ' + name + ' What is the captal of France?')

if (capital == 'Paris') {
  alert ('correct ' + name)

} else if (capital != 'Paris') {
  alert ('incorrect ' + name)
}
}