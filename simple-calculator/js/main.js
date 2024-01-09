let  total = 0

document.querySelector('#item0').addEventListener('click', reset)
document.querySelector('#item1').addEventListener('click', addThree)
document.querySelector('#item2').addEventListener('click', addSix)
document.querySelector('#item3').addEventListener('click', addNine)
document.querySelector('#item4').addEventListener('click', subtractTwo)
document.querySelector('#item5').addEventListener('click', subtractFour)
document.querySelector('#item6').addEventListener('click', subtractSix)

function reset(){
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function addThree(){
  total+= 3
  document.querySelector('#placeToPutResult').innerText = total
}

function addSix(){
  total+= 6
  document.querySelector('#placeToPutResult').innerText = total
}

function addNine(){
  total+= 9
  document.querySelector('#placeToPutResult').innerText = total
}

function subtractTwo(){
  total-= 2
  document.querySelector('#placeToPutResult').innerText = total
}

function subtractFour(){
  total-= 4
  document.querySelector('#placeToPutResult').innerText = total
}

function subtractSix(){
  total-= 6
  document.querySelector('#placeToPutResult').innerText = total
}

