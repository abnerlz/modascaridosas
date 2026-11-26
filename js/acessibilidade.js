(() => {
    "use strict";

    const get = (id) => document.getElementById(id);

    const botaoAbrir = get("abrir-acessibilidade");
    const botaoFechar = get("fechar-acessibilidade");
    const painel = get("painel-acessibilidade");
    const botaoAumentar = get("aumentar-fonte");
    const botaoDiminuir = get("diminuir-fonte");
    const botaoContraste = get("alto-contraste");
    const botaoRestaurar = get("restaurar-acessibilidade");
    const anuncio = get("anuncio-acessibilidade");

    // Se os controles não existirem nesta página, não interrompe os demais scripts.
    if (!botaoAbrir || !painel) return;

    const storage = {
        get(chave) {
            try {
                return window.localStorage.getItem(chave);
            } catch {
                return null;
            }
        },
        set(chave, valor) {
            try {
                window.localStorage.setItem(chave, String(valor));
            } catch {
                // Os controles continuam funcionando mesmo sem armazenamento local.
            }
        }
    };

    let tamanhoFonte = Number(storage.get("tamanhoFonte")) || 100;
    let altoContraste = storage.get("altoContraste") === "true";

    tamanhoFonte = Math.min(150, Math.max(80, tamanhoFonte));

    // O painel começa sempre fechado; somente o botão flutuante o abre.
    painel.hidden = true;
    botaoAbrir.setAttribute("aria-expanded", "false");

    function anunciar(mensagem) {
        if (anuncio) anuncio.textContent = mensagem;
    }

    function aplicarConfiguracoes() {
        document.documentElement.style.fontSize = `${tamanhoFonte}%`;
        document.body.classList.toggle("alto-contraste", altoContraste);

        if (botaoContraste) {
            botaoContraste.setAttribute("aria-pressed", String(altoContraste));
        }
    }

    function abrirPainel() {
        painel.hidden = false;
        botaoAbrir.setAttribute("aria-expanded", "true");
        botaoFechar?.focus();
    }

    function fecharPainel({ devolverFoco = true } = {}) {
        painel.hidden = true;
        botaoAbrir.setAttribute("aria-expanded", "false");

        if (devolverFoco) botaoAbrir.focus();
    }

    botaoAbrir.addEventListener("click", () => {
        const estaAberto = botaoAbrir.getAttribute("aria-expanded") === "true";

        if (estaAberto) {
            fecharPainel({ devolverFoco: false });
        } else {
            abrirPainel();
        }
    });

    botaoFechar?.addEventListener("click", () => fecharPainel());

    // Esc fecha o painel e devolve o foco ao botão que o abriu.
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && !painel.hidden) {
            fecharPainel();
        }
    });

    // Clique fora fecha o painel sem roubar o foco do elemento clicado.
    document.addEventListener("pointerdown", (evento) => {
        if (painel.hidden) return;

        const clicouNoPainel = painel.contains(evento.target);
        const clicouNoBotao = botaoAbrir.contains(evento.target);

        if (!clicouNoPainel && !clicouNoBotao) {
            fecharPainel({ devolverFoco: false });
        }
    });

    botaoAumentar?.addEventListener("click", () => {
        if (tamanhoFonte >= 150) {
            anunciar("O tamanho máximo do texto já está aplicado.");
            return;
        }

        tamanhoFonte = Math.min(150, tamanhoFonte + 10);
        storage.set("tamanhoFonte", tamanhoFonte);
        aplicarConfiguracoes();
        anunciar(`Tamanho do texto ajustado para ${tamanhoFonte} por cento.`);
    });

    botaoDiminuir?.addEventListener("click", () => {
        if (tamanhoFonte <= 80) {
            anunciar("O tamanho mínimo do texto já está aplicado.");
            return;
        }

        tamanhoFonte = Math.max(80, tamanhoFonte - 10);
        storage.set("tamanhoFonte", tamanhoFonte);
        aplicarConfiguracoes();
        anunciar(`Tamanho do texto ajustado para ${tamanhoFonte} por cento.`);
    });

    botaoContraste?.addEventListener("click", () => {
        altoContraste = !altoContraste;
        storage.set("altoContraste", altoContraste);
        aplicarConfiguracoes();
        anunciar(altoContraste ? "Alto contraste ativado." : "Alto contraste desativado.");
    });

    botaoRestaurar?.addEventListener("click", () => {
        tamanhoFonte = 100;
        altoContraste = false;
        storage.set("tamanhoFonte", tamanhoFonte);
        storage.set("altoContraste", false);
        aplicarConfiguracoes();
        anunciar("Configurações de acessibilidade restauradas.");
    });

    aplicarConfiguracoes();
})();