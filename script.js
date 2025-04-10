let display = document.getElementById('display')

function entrada(dados){
    if (display.value === '0'){
        display.value = dados
    }else {
        display.value += dados
    } 
}
function limpar(){
    display.value = '0'
}
function apagar(){
    display.value = display.value.slice(0, -1)
    if (display.value === ''){
        display.value = '0'
    }
}
function calcular(){
    try{
        display.value = eval(display.value)
    }catch{
        display.value = 'NaN'
    }
} 









/*
let display = document.getElementById('display')

function entrada(dados){
    document.getElementById('display').value += dados
}
function limpar(){
    document.getElementById('display').value = ''
}
function apagar(){
    display.value = display.value.slice(0, -1)
}
function calcular(){
    try{
        display.value = eval(display.value)
    }catch{
        display.value = 'NaN'
    }
} 
    */