let botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value / 100;
    let imcCalculado = document.getElementById('imc-calculado');
    let classificacaoIMC = document.getElementById('mensagem-imc')
    let tabIMC = [{ valor: 18.5, classificacao: 'Abaixo do peso' },
    { valor: 25, classificacao: 'Peso normal' },
    { valor: 30, classificacao: 'Sobrepeso' },
    { valor: 35, classificacao: 'Obesidade grau I' },
    { valor: 40, classificacao: 'Obesidade grau II' },
    { valor: 200, classificacao: 'Obesidade grau III ou mórbida' }
    ]

    if (peso == '' || altura == '') {
        imcCalculado.textContent = ''
        classificacaoIMC.textContent = 'Informe seu peso e altura';
    } else {
        let imc = (peso / altura ** 2).toFixed(1);
        for (let i = 0; i < tabIMC.length; i++) {
            if (imc < tabIMC[i].valor) {
                imcCalculado.textContent = imc;
                classificacaoIMC.textContent = tabIMC[i].classificacao;
                i = 10;
            }
        }
    }
}

function slider() {

}

botaoCalcular.addEventListener('click', calculandoIMC);