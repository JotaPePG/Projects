function meuEscopo() {
	const form = document.querySelector(".form");
	const resultado = document.querySelector(".resultado");

	function recebeEventoForm(evento) {
		evento.preventDefault();

		const peso = Number(form.querySelector(".peso").value);
		const altura = Number(form.querySelector(".altura").value);
		const p = document.createElement("p");
		resultado.innerHTML = "";
		p.classList.add("paragrafo-resultado");
		
		if (Number.isNaN(peso) && Number.isNaN(altura)) {
			p.innerHTML = "Peso e Altura Inválidos";
			return resultado.appendChild(p);
		} else if (Number.isNaN(peso)) {
			p.innerHTML = "Peso Inválido";
			return resultado.appendChild(p);
		} else if (Number.isNaN(altura)) {
			p.innerHTML = "Altura Inválida"
			return resultado.appendChild(p);
		}

		if (!(18.5 < contaIMC(peso, altura) && contaIMC(peso, altura) < 25)) {
			p.classList.add("paragrafo-resultado-red");
		}
		p.innerHTML = calculoImc(peso, altura);
		return resultado.appendChild(p);
	}

	form.addEventListener("submit", recebeEventoForm);
}

function calculoImc(peso, altura) {
	const imc = peso / Math.pow(altura, 2);
	console.log(imc);

	if (imc < 18.5) {
		return `Seu IMC é: ${imc.toFixed(2)} - Abaixo do peso`;
	} else if (18.5 < imc && imc < 25) {
		return `Seu IMC é: ${imc.toFixed(2)} - Peso normal`;
	} else if (25 < imc && imc < 30) {
		return `Seu IMC é: ${imc.toFixed(2)} - Sobrepeso`;
	} else if (30 < imc && imc < 35) {
		return `Seu IMC é: ${imc.toFixed(2)} - Obesidade grau 1`;
	} else if (35 < imc && imc < 40) {
		return `Seu IMC é: ${imc.toFixed(2)} - Obesidade grau 2`;
	} else {
		return`Seu IMC é: ${imc.toFixed(2)} - Obesidade grau 3`;
	}
}

function contaIMC (peso, altura) {
	const imc = peso / Math.pow(altura, 2);
	return imc;
}

meuEscopo();