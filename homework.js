let a = document.getElementById('amountselector')
a = Math.ceil(1)

let mainchart1 = 76

let generateChart = function (number2) {
    let chart1 = document.getElementById('mainchart')
    let newDiv = document.createElement('div')
    newDiv.innerText = number2
    newDiv.id = number2
    newDiv.classList.add('numberBox')
    chart1.appendChild(newDiv)
    

    
}
// 1 create the divs into the main container
// loop the div creator thoush the number 76 
let divchart =[]
for (let index = 1; index < 76; index++) {
    generateChart(index+1) 
    
}


const button1 = function () {
    let randomNumber = Math.floor(Math.random()*77)
    let targetNumberBox = document.getElementById(randomNumber)
    let nDisplay = document.getElementById("nDisplay")
    nDisplay.innerText = randomNumber
    targetNumberBox.classList.add('selected')
}
let value1
const consoleLogEventTargetValue = function (whatever){
    console.log(whatever.target.value)
    generateChart(whatever.target.value)
}

// document.getElementById("amountselector").addEventListener("change", function(whatever){
//     console.log(whatever.target.value)
// })
document.getElementById("amountselector").addEventListener("change", consoleLogEventTargetValue)





