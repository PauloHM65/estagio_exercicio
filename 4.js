/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  */
const faturamento = [
    {
        "local": "SP",
        "valor": 67836.43
    },
    {
        "local": "RJ",
        "valor": 36678.66
    },
    {
        "local": "MG",
        "valor": 29229.88
    },
    {
        "local": "ES",
        "valor": 27165.48
    },
    {
        "local": "Outros",
        "valor": 19849.53
    }
]

let FaturamentoTotal=0;
for(let i=0;i<faturamento.length;i++){
    FaturamentoTotal += faturamento[i].valor;
}
for(let i=0;i<faturamento.length;i++){
    console.log(`${faturamento[i].local} - ${((faturamento[i].valor*100)/FaturamentoTotal).toFixed(2)}%`)
}