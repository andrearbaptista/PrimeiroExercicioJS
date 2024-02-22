

let n1 = prompt("Favor inserir um número")
let n2 = prompt("Favor inserir um segundo número")

let soma=(Number(n1)+Number(n2))
let subtracao=(Number(n1)-Number(n2))
let mult=(Number(n1)*Number(n2))
let divide=(Number(n1)/Number(n2))
let resto=(Number(n1)%Number(n2))



alert("A soma dos números é " + (soma ))
alert("A subtração dos números é " + (subtracao ))
alert("A multiplicação dos números é " + (mult ))
alert("A divisão dos números é " + (divide ))
alert("O resto da divisão dos números é  " + (resto ))

let even1= Number(n1)%2 
let even2= Number(n2)%2



if(even1===0) {
    alert('O primeiro número é par');
} else if(even1==!0) {
  alert('O primeiro número é ímpar')
}

if(even2===0) {
  alert('O segundo número é par')
} else if(even2==!0) {
alert('O segundo número é ímpar')
}

if(n1===n2) {
alert('Os números escolhidos são iguais');
} else if(n1!=n2) {
alert('Os números escolhidos são diferentes')
}