/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;

b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/
const faturamento = require('./3.json'); 
let menorValor = faturamento[0].valor;
let maiorValor = faturamento[0].valor;
let somaFaturamentosValidos = 0,  diaValidos =0, x=0;

for(fat of faturamento){
    if(fat.valor < menorValor){ 
        menorValor = fat.valor;
    }else if (fat.valor > maiorValor) {
         maiorValor = fat.valor ;
    }
    if(fat.valor > 0){
        somaFaturamentosValidos += fat.valor;
        diaValidos+=1;
    }
    
}
somaFaturamentosValidos = somaFaturamentosValidos/diaValidos;
for(fat of faturamento){
    if(fat.valor > somaFaturamentosValidos){
        x++;
    }
}
console.log(`Menor faturamento: ${menorValor}, Maior faturamento: ${maiorValor}`)
console.log(`Numero de dias(validos) que o faturamento foi superior a media mensal: ${x} `)
