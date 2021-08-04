function pupperAge() {
let dogsAge = prompt ('What is your dogs age')
dogsAge = Number (dogsAge)
if (typeof(dogsAge) == 'number') {

  if (dogsAge > 0 && dogsAge <60) {
    
    // do the thing
    let difference = dogsAge * 7
    alert ('Your dog is ' + difference + ' in dog years')

  } else {
    alert('Error:invalid age')
  }

} else {
  alert('Error:bad input')
}
}

function gstCalculator() {
  let price = prompt ('Please enter a price')
  price = Number(price)
  
  if (typeof(price) == 'number') {

    if (price > 0 && price <10000) {

    let gst = price * 1.15
    alert ('Your GST is ' + '$' + gst)
     
  } else {
    alert('Error: invalid price')
  }

} else {
  alert('Error:bad input')
} 
}

function lessonsSec() {
   let lessons = prompt ('Enter a number of lessons you have had') 
  let difference = lessons *3600
  alert ('You have had ' + difference + ' seconds in your lesson')
}

function lifeRemaining() {
  let age = prompt ('What is your age')
  let difference = 82 - age
  alert ('You have ' + difference + ' years to live')
}
