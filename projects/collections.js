

function lesson1() {
  let name = prompt ('What is your name?')
  alert('We want to know if you like programming!')
  let answer = prompt ('Do you like programming ' + name + '?')
  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
}

function lesson2() {
let name = prompt('What is your name?')
let age = Number(prompt('How old are you?'))

if (age > 65) {
alert ('You can retire') 

} if (age < 5) {
alert ('You need supervision when using a computer')

} if (age >= 18) {
  alert("You're old enough to vote")

} if (age !=99){
  alert ('You are not the same age as me')
}
}

function lesson3() {
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





const jobs = [
  'astronaut',
  'firefighter',
  'police officer',
  'judge',
  'lawyer',
  'teacher',
]

function futureJob() {
  let index = 0

  alert('Your future job will be ' + jobs[5])
}

let subjects = [
  'English',
  'Digital Technology',
]

function addSubject() {
  let newSubject = 'Maths'

  // add a new subject to the end of the subjects array
  subjects.push(newSubject)
}

function removeSubject() {
  let index = 0

  // remove 1 subject at the index position of the subjects array
  subjects.splice(index, 1)
}

let numberArray = [
  1,
  100,
  1000,
  10000,
  1234567890,
]

function numberSearch() {
  let searchTarget = 1
  let searchResult = false
  
  numberArray.forEach( (currentNumber) => {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  })
}