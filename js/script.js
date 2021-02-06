//Dia 1

document.querySelector(".dia1 button").onclick=dia1

function dia1(){
    let children = document.querySelector("#children").value
    let candies = document.querySelector("#candies").value
    document.querySelector(".dia1 .resultado").innerHTML=`Cada niño cogera ${Math.floor(candies/children)} chuches, por lo que en total comerán ${Math.floor(candies/children)*children} chuches`
}

//Día 2

document.querySelector(".dia2 button").onclick=dia2

function dia2(){
    let deposit = parseFloat(document.querySelector("#deposit").value) 
    let rate = parseFloat(document.querySelector("#rate").value)
    let threshold = parseFloat(document.querySelector("#threshold").value)
    let years = 0
    while (deposit<threshold){
        deposit += deposit*rate/100
        years++
    }
    document.querySelector(".dia2 .resultado").innerHTML=`Con un depósito de ${document.querySelector("#deposit").value}€ y un porcentake de ${rate}%, para llegar a ${threshold}€ hacen falta ${years} años`
}

//Día 3

document.querySelector(".dia3 button").onclick=dia3

function dia3(){
    let array = document.querySelector("#array").value.split(",")
    let number = parseFloat(document.querySelector("#number").value)
    let newArray = []
    let count = 0
    while (count<array.length)
        newArray.push(array.slice(count,count+=number))
    document.querySelector(".dia3 .resultado").innerHTML=`${newArray}`
    console.log(newArray)
}

//Día 4

document.querySelector(".dia4 button").onclick=dia4

function dia4(){
    let year = parseFloat(document.querySelector("#year").value)
    let century = Math.floor((year-1)/100)+1
    document.querySelector(".dia4 .resultado").innerHTML=`El año ${year} es del siglo ${century}`
}

//Día 5

document.querySelector(".dia5 button").onclick=dia5

function dia5(){
    let string = document.querySelector("#string").value.split("").reverse().join("")
    document.querySelector(".dia5 .resultado").innerHTML=`${string}`
}

//Día 6

document.querySelector(".dia6 button").onclick=dia6

function dia6(){
    let array = document.querySelector("#array2").value.split(",")
    array.sort(function(a,b){
        return a.length-b.length
    })
    document.querySelector(".dia6 .resultado").innerHTML=`Tu array ordenado por longitud es ${array}`
}

//Día 7

document.querySelector(".dia7 button").onclick=dia7

function dia7(){
    let text = document.querySelector("#text").value.split("")
    let vowels = ["a","e","i","o","u"]
    let number = 0
    text.forEach(letra=>{
        if(vowels.includes(letra))
            number+=1
        else
            number+=2
    })
    document.querySelector(".dia7 .resultado").innerHTML=`La suma del texto es ${number}`
}

//Día 8

let dado = document.querySelector("#dado")
dado.onclick=dia8

function dia8(){
    while (dado.firstChild)dado.firstChild.remove()
    let punto = document.createElement("div")
    punto.classList.add("punto")
    for(i=0;i<Math.round(Math.random()*5+1);i++) dado.appendChild(punto.cloneNode(true))
}

//Día 9

document.querySelector(".dia9 button").onclick=dia9

function dia9(){
    let number = document.querySelector("#number2").value
    let sum = 0
    let fibo0 = 0
    let fibo1 = 1
    while(fibo1<=number){
        if(fibo1%2!=0)
            sum += fibo1
        fibo1 += fibo0
        fibo0 = fibo1 - fibo0
    }
    document.querySelector(".dia9 .resultado").innerHTML=`La suma de los numeros impares es ${sum}`
}

//Día 10

document.querySelector(".dia10 button").onclick=dia10

function dia10(){
    let array = document.querySelector("#array3").value.split(",")
    let product = 0
    for(i=1;i<array.length;i++){
        if(array[i-1]*array[i]>product)
            product = array[i-1]*array[i]
    }
    document.querySelector(".dia10 .resultado").innerHTML=`El mayor producto es ${product}`
}

//Día 11

document.querySelector(".dia11 button").onclick=dia11

function dia11(){
    let array = document.querySelector("#array4").value.split(",").sort((a,b)=>b-a)
    let jumps = 0
    for(let i=1;i<array[0]+1;i++){
        if(array.every((num)=>num%i!=0)){
            jumps = i
            break
        }
    }
    document.querySelector(".dia11 .resultado").innerHTML=`El menor salto es ${jumps}`
}

//Día 12

document.querySelector(".dia12 button").onclick=dia12

function dia12(){
    let correct = false
    let hour = document.querySelector("#hour").value.split(":")
    if(hour[0]<24&hour[0]>=0&hour[1]<60&hour[1]>=0)
        correct = true
    document.querySelector(".dia12 .resultado").innerHTML=`${correct}`

}

//Día 13

document.querySelector(".dia13 button").onclick=dia13

function dia13(){
    let array = document.querySelector("#array5").value.split(",")
    let index = document.querySelector("#index").value
    let newArray = array.filter((value,i)=>(i+1)%index!=0)
    document.querySelector(".dia13 .resultado").innerHTML=`${newArray}`
}

//Día 14

document.querySelector(".dia14 button").onclick=dia14

function dia14(){
    let array = document.querySelector("#array6").value.split(",")
    let subtraction = 0
    for(i=1;i<array.length;i++){
        if(Math.abs(array[i-1]-array[i])>subtraction)
            subtraction = Math.abs(array[i-1]-array[i])
    }
    document.querySelector(".dia14 .resultado").innerHTML=`La mayor diferencia es ${subtraction}`
}

//Día 15

//Carousel de fotos

//Día 16

document.querySelector(".dia16 button").onclick=dia16

function dia16(){
    let words = document.querySelector("#sentence").value.split(" ")
    let dashedWords = words.map((word)=>{
        let chars = word.split("")
        return chars.join("-")
    })
    let text = dashedWords.join(" ")
    document.querySelector(".dia16 .resultado").innerHTML = text
}

//Día 17

document.querySelector(".dia17 button").onclick=dia17

function dia17(){
    let chars = document.querySelector("#string2").value.split("")
    let difCharts=[]
    chars.forEach(l=>{
        if(!difCharts.includes(l))
            difCharts.push(l)
    })
    document.querySelector(".dia17 .resultado").innerHTML = difCharts.length
}

//Día 18

document.querySelector(".dia18 button").onclick=dia18

function dia18(){
    let numbers = document.querySelector("#numbers").value.split(",")
    let newNumbers=[]
    for (let i=numbers.length-1;i>=0;i--){
        for(let j=i;j>=0;j--){
            if(numbers[j]<numbers[i]){
                newNumbers.unshift(numbers[j])
                break
            }else if (j==0)
                newNumbers.unshift(-1)
        }
    }
    document.querySelector(".dia18 .resultado").innerHTML = newNumbers
}

//Día 19

document.querySelector(".dia19 button").onclick=dia19

function dia19(){
    let s = document.querySelector("#string3").value
    let value = true
    for(let i=1;i<s.length;i++){
        if(s.charCodeAt(i)<=s.charCodeAt(i-1)){
            value=false
            break
        }
    }

    document.querySelector(".dia19 .resultado").innerHTML = value
}

//Día 20

document.querySelector(".dia20 button").onclick=dia20

function dia20(){
    let direction = document.querySelector("#direction").value.split(".")
    let domains = ["commercial","organization","network","information"]
    let domain = ""
    domains.forEach(dom=>{
        if(dom.indexOf(direction[direction.length-1])!=-1)
            domain=dom
    })
    document.querySelector(".dia20 .resultado").innerHTML = domain
}

//Día 21

document.querySelector(".dia21 button").onclick=dia21

function dia21(){
    let integer1 = document.querySelector("#integer1").value.split(",")
    let integer2 = document.querySelector("#integer2").value.split(",")
    let value = document.querySelector("#value").value
    let sum = false
    integer1.forEach(num1=>{
        integer2.forEach(num2=>{
            if(parseInt(num1)+parseInt(num2)==value)
                sum = true
        })
    })
    document.querySelector(".dia21 .resultado").innerHTML = sum
}

//Día 22

document.querySelector(".dia22 button").onclick=dia22

function dia22(){
    let matrix = [[1,1,1,2],[0,5,0,4],[2,1,3,6]]
    console.log(matrix)
    let columnValue = document.querySelector("#column").value
    let column =[]
    matrix.forEach(row=>{
        column.push(row[columnValue])
    })
    document.querySelector(".dia22 .resultado").innerHTML = column
}

//Día 23

let characters = document.querySelector("#twitter")
characters.onkeyup=dia23

function dia23(){
    document.querySelector("#char").textContent=140-characters.value.length
    if (characters.value.length>140){
        document.querySelector(".dia23 button").disabled=true
        document.querySelector(".dia23 p").classList.add("color")
        
    }else{
        document.querySelector(".dia23 button").disabled=false
        document.querySelector(".dia23 p").classList.remove("color")
    }
}

//Día 24

document.querySelector(".dia24 .btn-primary").onclick=dia24
document.querySelector(".dia24 .btn-danger").onclick=stop
let target = 0
let counter = 0
let stopCrono = false

function dia24(){
    document.querySelector(".dia24 .btn-primary").disabled=true
    document.querySelector(".dia24 .btn-danger").disabled=false
    document.querySelector("#result").innerHTML=""
    stopCrono = false
    counter = 0
    document.querySelector("#spining").innerHTML=0
    document.querySelector("#result").innerHTML=""
    target = Math.round(Math.random()*80+20)
    document.querySelector("#target").innerHTML=target
    spining()
}

function spining(){
    let interval = setInterval(() => {
        counter++
        document.querySelector("#spining").innerHTML=counter
        if(stopCrono==true){
            clearInterval(interval)
            document.querySelector("#spining").innerHTML=counter-1
        }
    }, 75);
}

function stop(){
    stopCrono=true
    document.querySelector(".dia24 .btn-danger").disabled=true
    document.querySelector(".dia24 .btn-primary").disabled=false
    check()
}

function check(){
    if(counter==target)
        document.querySelector("#result").innerHTML=`Oh my GOD, you WIN!`
    else
        document.querySelector("#result").innerHTML=`Oh no, you lose! Off by ${Math.abs(target-counter)}`
}