let biel = document.getElementById("biel");
let texto = document.getElementById("biel2")

function Resposta()
{
    texto.innerHTML = "Ola, " +  biel.value + " tudo bem?";
}

let x = document.getElementById("x")
let z = document.getElementById("z") 



function y()
{
    z.innerHTML = parseInt(x.value) /100;
}


let numero = document.getElementById ("numero")
let mostrar = document.getElementById ("proximo")
let result = document.getElementById ("anterior")

function comparar()
{
    proximo.innerHTML = parseInt(numero.value)+ 1 + " sucessor"
    anterior.innerHTML = parseInt(numero.value)- 1 + " anterior"
}


let a = document.getElementById("a")
let b = document.getElementById("b")
let d = document.getElementById("d")

function c()
{
    if(a.value > b.value)
     {
d.innerHTML > a.value
     }
else{
d.innerHTML = b.value
    }
}



function exibir()
{
    if( x > 1250)
    {

    result.innerHTML = parseInt((issac.value)) +125;
}
    else{

    
    result.innerHTML = parseInt(issac.value) +187;
} 
}

var c = 1;
while (c < 101)
    {
        console.log(c)
        c = c + 1 ;
    }
var c = 5;
while (c < 51)
    {
        console.log(c)
        c = c + 5 ;
    }
var c = 100;
while (c > -1)
    {
        console.log(c)
        c = c - 10 ;
    }