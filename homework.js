let a = document.getElementById('amountselector')
a = Math.ceil(1)

let mainchart1 = 76

let generateChart = function (number2) {
    let chart1 = document.getElementById('mainchart')
    let newDiv = document.createElement('div')
    newDiv.innerText = number2
    newDiv.classList.add('numberBox')
    chart1.appendChild(newDiv)

    
}
// 1 create the divs into the main container
// loop the div creator thoush the number 76 
let divchart =[]
for (let index = 0; index < 76; index++) {
    generateChart(index+1) 
}


let generateChart2 = function (number2) {
    let chart1 = document.getElementById('playerchart')
    let newDiv = document.createElement('div')
    newDiv.innerText = number2
    newDiv.classList.add('playerChart')
    chart1.appendChild(Div)
}


const button1 = function () {
   let nButton = document.getElementById('Ndisplay')
    nButton.innerText = Math.floor(Math.random()*77)

}


    

