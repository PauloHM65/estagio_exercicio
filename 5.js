/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

let word = "Paralelepipedo" ;//<--- Insira a palavra desejada
let newWord = ""

for(let i=word.length; i>0; i--){
    newWord += word[i-1]
}
console.log(newWord);
