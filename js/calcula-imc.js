var pacientes = document.querySelectorAll(".paciente");

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

if (alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc.toFixed(2);
}

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        alert("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;

        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alert("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}