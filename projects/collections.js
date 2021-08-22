
// #####################################
// #### ----- Furure Job ----- ####
// #####################################

const jobs = [
  'astronaut',
  'firefighter',
  'police officer',
  'judge',
  'lawyer',
  'teacher',
]

function futureJob() {
  let index = 5

  alert('Your future job will be ' + jobs[index])
}

// #####################################
// #### ----- Subject List ----- ####
// #####################################

let subjects = [
  'English',
  'Digital Technology',
]

function subjectList() {
  let newSubject = 'Science'
  subjects.push(newSubject)
}

function subjectList() {
  let subject1 = prompt ('Add a subject')
  subjects.push (subject1)
}

function removeSubject() {
  let index = 5

  subjects.splice(index, 1)

  alert ('Your subject is ' + subjectList)
}


// #####################################
// #### ----- Number Search ----- ####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  1234567890,
]

function numberSearch() {
  let searchTarget = 2
  let searchResult = false
  
  numberArray.forEach( (currentNumber) => {
    alert(currentNumber)
    if (currentNumber == searchTarget) {
    searchResult = true
    }
  })
}

function showNumbers() {
  alert("1, 100, 1000, 10000, 1234567890")
}

// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
}

function showSubject() {
  alert('The subject is ' + subject.name + ' it is in room ' + subject.room + ' there are ' + subject.students + ' students')
}

function changeSubject() {
  let newName = prompt('Enter one of your other subjects')
  let newRoom = prompt('What room is your subject in?')
  let newStudent = prompt('How many students are in your class?')
  subject.name = newName
  subject.room = newRoom
  subject.students = newStudent
  newRoom = Number(newRoom)
  newStudent = Number(newStudent)
 
  alert('Your subject is ' + subject.name + ' it is in room ' + subject.room + ' there are ' + subject.students + ' students')
}


// #####################################
// ####### ----- Find a Pet ----- ######
// #####################################

let petRegister = [
  { name: 'Snuggles ', type: 'cat ', color: 'tabby', age: ' 2'},
  { name: 'Socks ', type: 'cat ', color: 'black and white', age: ' 9'},
  { name: 'Snoodle ', type: 'cat ', color: 'brown', age: ' 0'},
  { name: 'Dogan ', type: 'dog ', color: 'brown', age: ' 8' },
  { name: 'Reffrey ', type: 'dog ', color: 'tabby', age: ' 4'
  },

]

function petSearch() {
  let searchType = prompt('what color is your pet?')
  let searchResult = ''

  petRegister.forEach( (currentPet) => {
    if (currentPet.color == searchType) {
      searchResult += currentPet.name + currentPet.type + currentPet.color + currentPet.age + ', '
    }
  })
 
  alert(searchResult)
}

// #####################################
// ###### ----- Pet Register ----- #####
// #####################################

function addPet() {
  let newName = prompt('What is your pets name?')
  let newAge = prompt('What age is your pet?')
  let newColor = prompt('What color is your pet?')
  let newType = prompt('What type is your pet?')

  let newPet = {
    name: newName,
    age: newAge,
    color: newColor,
    type: newType,
  }

  // add the pet object to the register array
  alert (petRegeister)
  petRegister.push(newPet)
}

function listPets() {
  // loop through the register array and output each pet object

alert (petRegister)
}
