function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputPeso = form.querySelector('#peso'); //Captura o id peso
        const inputAltura = form.querySelector('#altura'); //Captura o id altura
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        console.log(`peso: ${peso},altura= ${altura}`);
        
        let imc = peso / (altura*altura);
        imc = imc.toFixed(2); //Duas casas após a virgula
        const p = document.createElement('p');

        if (peso === 0){
            p.classList.add('invalid');
            p.innerHTML = `Peso inválido.`;
            resultado.appendChild(p);
        } else if (altura === 0) {
            p.classList.add('invalid');
            p.innerHTML = `Altura inválida.`;
            resultado.appendChild(p);
        } else if (imc <= 18.5){
            p.classList.add('valid');
            p.innerHTML = `Seu IMC é ${imc}. Você está baixo do peso.`;
            resultado.appendChild(p);
        } else if(imc > 18.5 && imc <= 25){
            p.classList.add('valid');
            p.innerHTML = `Seu IMC é ${imc}. Você está no seu peso ideal.`;
            resultado.appendChild(p);
        } else if(imc > 25 && imc <= 30){
            p.classList.add('valid');
            p.innerHTML = `Seu IMC é ${imc}. Você está com sobrepeso.`;
            resultado.appendChild(p);
        } else if(imc > 30 && imc <= 35){
            p.classList.add('valid');
            p.innerHTML = `Seu IMC é ${imc}. Você está com sobrepeso.`;
            resultado.appendChild(p);
        } else if(imc > 35 && imc <= 40){
            p.classList.add('valid');
            p.innerHTML = `Seu IMC é ${imc}. Você está com obesidade nivel 2.`;
            resultado.appendChild(p);
        } else if(imc > 40){
            p.classList.add('valid');
            p.innerHTML = `Seu IMC é ${imc}. Você está com obesidade nivel 3.`;
            resultado.appendChild(p);
        } else if(imc >= 18.6 && imc <= 24.9){
            p.classList.add('valid');
            p.innerHTML = `Seu IMC é ${imc}. Você está no seu peso ideal.`;
            resultado.appendChild(p);
        } else {
            p.classList.add('invalid');
            p.innerHTML = `Valor inválido.`;
            resultado.appendChild(p);
        }
    })
};
meuEscopo();
