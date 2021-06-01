let botaoCalcular = document.getElementById('btnCalcular');
let sliderPeso = document.getElementById('slider-peso');
let sliderAltura = document.getElementById('slider-altura');
let textPeso = document.getElementById('text-peso');
let textAltura = document.getElementById('text-altura');

function calculandoIMC() {
    let peso = textPeso.value;
    let altura = textAltura.value;
    let imcCalculado = document.getElementById('imc-calculado');
    let classificacaoIMC = document.getElementById('mensagem-imc')
    let tabIMC = [{ valor: 18.5, classificacao: 'Abaixo do peso' },
    { valor: 25, classificacao: 'Peso normal' },
    { valor: 30, classificacao: 'Sobrepeso' },
    { valor: 35, classificacao: 'Obesidade grau I' },
    { valor: 40, classificacao: 'Obesidade grau II' },
    { valor: 500, classificacao: 'Obesidade grau III ou mórbida' }
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

function Text_Peso_Change() {
    textPeso.value = parseFloat(sliderPeso.value);
}

function Text_Altura_Change() {
    textAltura.value = sliderAltura.value;
}


function Slider_Peso_Change() {
    sliderPeso.value = textPeso.value;
}

function Slider_Altura_Change() {
    if (textPeso.value == '') {
        sliderPeso.value = 0;
    } else {
        sliderAltura.value = textPeso.value;
    }
}




botaoCalcular.addEventListener('click', calculandoIMC);
sliderPeso.addEventListener('input', Text_Peso_Change);
sliderAltura.addEventListener('input', Text_Altura_Change);
textPeso.addEventListener('input', Slider_Peso_Change)