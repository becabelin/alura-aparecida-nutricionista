var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


});

// calcular o imc
function calcularImc(pacientes) {
    pacientes.forEach(function(paciente) {
        var tdPeso = paciente.querySelector(".info-peso");
        var tdAltura = paciente.querySelector(".info-altura");

        // não deixar calcular o imc se a altura ou peso estiverem vazios
        if (tdPeso.textContent == "" || tdAltura.textContent == "" || tdPeso.textContent == "" && tdAltura.textContent == "") {
            paciente.classList.add("paciente-invalido");
            alert("Preencha todos os campos do " + tdNome.textContent + "!");
        }
        if (tdPeso.textContent <= 0 || tdPeso.textContent >= 500) {
            var tdNome = paciente.querySelector(".info-nome");
            paciente.classList.add("paciente-invalido");
            alert("Peso inválido! Paciente: " + tdNome.textContent);
        }
        if (tdAltura.textContent <= 0 || tdAltura.textContent >= 3) {
            var tdNome = paciente.querySelector(".info-nome");
            paciente.classList.add("paciente-invalido");
            alert("Altura inválida! Paciente: " + tdNome.textContent);
        } else {
            var peso = tdPeso.textContent;
            var altura = tdAltura.textContent;
            var imc = peso / (altura * altura);
            var tdImc = paciente.querySelector(".info-imc");
            tdImc.textContent = imc.toFixed(2);
            var tdSaudavel = paciente.querySelector(".info-saudavel");
            var classificacao = classificarImc(imc);
            tdSaudavel.textContent = classificacao;
        }
    });
}

// calcular se o imc é saudável ou não
function classificarImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc <= 24.9) {
        return "Peso normal";
    } else if (imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc <= 34.9) {
        return "Obesidade grau I";
    } else if (imc <= 39.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}

// classificação em info-saudavel
function mostrarSaudavel(pacientes) {
    pacientes.forEach(function(paciente) {
        var tdImc = paciente.querySelector(".info-imc");
        var imc = tdImc.textContent;
        var tdSaudavel = paciente.querySelector(".info-saudavel");
        var classificacao = classificarImc(imc);
        tdSaudavel.textContent = classificacao;
    });
}

calcularImc(pacientes);
mostrarSaudavel(pacientes);