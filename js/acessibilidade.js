// abner


// Selecionando os botões
const aumentarFonte = document.getElementById("aumentar-fonte");
const diminuirFonte = document.getElementById("diminuir-fonte");
const contraste = document.getElementById("alto-contraste");
const restaurar = document.getElementById("restaurar-acessibilidade");

// Configurações iniciais
let tamanhoFonte = Number(localStorage.getItem("tamanhoFonte")) || 100;
let altoContraste = localStorage.getItem("altoContraste") === "true";

// Aplicando as configurações salvas
function aplicarConfiguracoes() {
    document.documentElement.style.fontSize = tamanhoFonte + "%";

    document.body.classList.toggle("alto-contraste", altoContraste);

    contraste.setAttribute("aria-pressed", altoContraste);
}

// Aumentar o texto
aumentarFonte.addEventListener("click", function () {
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        localStorage.setItem("tamanhoFonte", tamanhoFonte);
        aplicarConfiguracoes();
    }
});

// Diminuir o texto
diminuirFonte.addEventListener("click", function () {
    if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        localStorage.setItem("tamanhoFonte", tamanhoFonte);
        aplicarConfiguracoes();
    }
});

// Ativar ou desativar alto contraste
contraste.addEventListener("click", function () {
    altoContraste = !altoContraste;

    localStorage.setItem("altoContraste", altoContraste);

    aplicarConfiguracoes();
});

// Restaurar configurações
restaurar.addEventListener("click", function () {
    tamanhoFonte = 100;
    altoContraste = false;

    localStorage.setItem("tamanhoFonte", tamanhoFonte);
    localStorage.setItem("altoContraste", altoContraste);

    aplicarConfiguracoes();
});

// Executar ao carregar a página
aplicarConfiguracoes();
