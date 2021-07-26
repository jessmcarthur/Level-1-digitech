function maoriMihi() {
  let mountain = prompt('What is your mountain?')
  let river = prompt('What is your river/ocean/lake/bay-harbour?')
  let vessel = prompt('What is your vessel?')
  let tribe = prompt('What is your tribe?')
  let place = prompt('What is your home town?') 
  let name = prompt('What is your full name?')

  alert('Tēnā koutou,\n'+
    ' Ko ' + mountain + ' te maunga,\n' +
    ' Ko ' + river + ' te awa/moana/roto/whanga,\n' +
    ' Ko ' + vessel + ' te waka,\n' +
    ' Ko ' + tribe + ' te iwi\n' +
    ' Ko ' + place + ' au\n' +
    ' Ko ' + name + ' tōku ingoa\n' +
    ' Tēnā koutou, Tēnā koutou, Tēnā koutou, katoa')
}

function nonMaoriMihi() {

}

function theRepeater() {
let said = prompt ('Say something')
  if (typeof(said) !='number') {
    if (said != '') {
      alert ('Error: invalid input')
    } else {
      alert("Error: That's not a word")
    }
  } else {
      alert('Error:bad input')
  }
}

function madLibs() {
  let firstWord = prompt ('Type a word')
  let secWord = prompt ('Type another word')
  let thirdWord = prompt ('Type another word')
  let lastWord = prompt ('Finally type the last word')

  alert (firstWord + ' she said ' + secWord + ' as she rode her scooter to the skatepark. ' + thirdWord + ' her mate said as she ' + lastWord)
}

function converstion() {
  let name = 'Mary'
  alert('We want to know if you like programming!')
  alert('Do you like programming ' + name + '?')
  let answer = prompt()
  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
}