/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

const numero = 377 // <----inserir o numero que deseja saber se esta na sequencia

let fibo =0 , fibo1=1, total=0;
for(let i =0; i<numero; i = total){
    total = fibo + fibo1;
    fibo = fibo1;
    fibo1 = total;
}
if(numero == total){
    console.log("esta na sequencia")
}else{
    console.log("nao esta na seuqencia")
}