# Modas Caridosas

<p align="center">
  <img src="imagens/logo/modas_caridosas_logo.png" alt="Logo Modas Caridosas" width="300">
</p>

<p align="center">
  <strong>Doe, Troque, Reutilize!</strong>
  <br>
  Moda circular, acessível e inclusiva.
</p>

<p align="center">
  <a href="https://abnerlz.github.io/modascaridosas/">
    Acessar o projeto
  </a>
  |
  <a href="https://github.com/abnerlz/modascaridosas">
    Repositório
  </a>
</p>

---

## Sobre o projeto

O **Modas Caridosas** é uma plataforma web voltada à divulgação de roupas para doação e à conscientização sobre a reutilização de vestimentas.

O projeto apresenta uma proposta de moda circular, incentivando a doação, a troca e o reaproveitamento de peças de roupas em boas condições.

Além disso, aborda temas relacionados à acessibilidade, inclusão, sustentabilidade e valorização cultural, buscando demonstrar como pequenas atitudes podem contribuir para um consumo mais consciente.

A iniciativa está alinhada ao **Objetivo de Desenvolvimento Sustentável 12 (ODS 12) — Consumo e Produção Responsáveis**, da Organização das Nações Unidas (ONU).

## Demonstração

O projeto está publicado por meio do GitHub Pages e pode ser acessado pelo endereço:

**[https://abnerlz.github.io/modascaridosas/](https://abnerlz.github.io/modascaridosas/)**

## Funcionalidades

O site é composto por cinco páginas principais:

| Página | Descrição |
|---|---|
| **Início** | Apresentação da plataforma, sua proposta e acesso às principais seções. |
| **Encontrar Roupas** | Exibição de um catálogo demonstrativo de peças de roupas. |
| **Quero Doar** | Apresentação da proposta de doação e formulário para preenchimento de informações sobre as peças. |
| **Acessibilidade e Inclusão** | Conteúdos sobre moda inclusiva, roupas adaptadas, conforto e autonomia. |
| **Sustentabilidade e Cultura** | Conteúdos sobre consumo consciente, reutilização, conservação e valorização cultural. |

### Recursos de acessibilidade

O projeto disponibiliza um painel de acessibilidade presente nas páginas do site, com os seguintes recursos:

- **Ajuste de fonte:** permite aumentar ou diminuir o tamanho do texto.
- **Alto contraste:** modifica as cores da interface para melhorar a diferenciação visual.
- **Restaurar configurações:** retorna os ajustes de acessibilidade aos valores padrão.
- **Persistência de preferências:** utiliza `localStorage` para manter as configurações entre visitas.
- **Navegação por teclado:** permite utilizar os controles por meio do teclado.
- **Anúncios acessíveis:** utiliza regiões de status para comunicar alterações nas configurações.

## Tecnologias utilizadas

As tecnologias utilizadas no desenvolvimento são:

- **HTML5:** estruturação semântica e organização do conteúdo.
- **CSS3:** estilização, identidade visual, layouts e responsividade.
- **JavaScript:** implementação dos recursos interativos de acessibilidade.
- **Git:** controle de versão do código-fonte.
- **GitHub:** hospedagem do repositório e colaboração no desenvolvimento.
- **GitHub Pages:** publicação e disponibilização do site na web.

## Identidade visual

A interface utiliza uma paleta de cores baseada em tons naturais, com predominância de verde, creme e terracota.

A proposta visual busca transmitir sustentabilidade, acolhimento e simplicidade, mantendo uma identidade consistente entre as páginas.

## Estrutura do projeto

O projeto está organizado em diretórios para separar os arquivos de estrutura, estilização, comportamento e recursos visuais.

```text
modascaridosas/
│
├── index.html
├── README.md
│
├── css/
│   ├── acessibilidade.css
│   ├── doacao.css
│   ├── geral.css
│   ├── lyt.css
│   └── pages.css
│
├── js/
│   └── acessibilidade.js
│
├── imagens/
│   ├── logo/
│   ├── pessoas/
│   └── roupas/
│
└── pages/
    ├── acessibilidade.html
    ├── encontrar-roupas.html
    ├── quero-doar.html
    └── sustentabilidade.html
```

### Organização dos diretórios

| Diretório | Responsabilidade |
|---|---|
| `css/` | Armazena as folhas de estilo responsáveis pela apresentação visual do site. |
| `js/` | Contém os scripts utilizados nas funcionalidades interativas. |
| `imagens/` | Armazena os recursos visuais utilizados nas páginas. |
| `pages/` | Reúne as páginas HTML complementares à página inicial. |

## Como executar o projeto localmente

O projeto utiliza tecnologias front-end e não necessita de instalação de dependências ou configuração de servidor backend.

Para executar localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/abnerlz/modascaridosas.git
   ```

2. Acesse o diretório:

   ```bash
   cd modascaridosas
   ```

3. Abra a pasta no Visual Studio Code.

4. Execute o arquivo `index.html` em um navegador.

Também é possível utilizar a extensão **Live Server** do Visual Studio Code para visualizar as alterações durante o desenvolvimento.

## Hospedagem

A publicação do projeto é realizada pelo **GitHub Pages**, utilizando a branch `main` como origem dos arquivos.

**Endereço publicado:**

https://abnerlz.github.io/modascaridosas/

## Limitações da versão atual

O Modas Caridosas é um projeto front-end. Portanto, algumas funcionalidades são apresentadas de maneira demonstrativa.

Atualmente:

- O catálogo de roupas apresenta conteúdo estático.
- Os formulários de pesquisa não possuem filtragem dinâmica das peças.
- O formulário de doação não possui integração para envio ou armazenamento das informações.
- Não existe integração com banco de dados.
- Não existe sistema de autenticação de usuários.

## Equipe de desenvolvimento

Projeto desenvolvido em grupo por:

- Antônio Fernandes de Macêdo Neto
- Abner Lucas
- William Bier da Silva
- João Matheus
- Igor Rafael
- Ítalo

## Referências

- [ONU — Objetivo de Desenvolvimento Sustentável 12](https://brasil.un.org/pt-br/sdgs/12)
- [Comitê Internacional da Cruz Vermelha (CICV)](https://www.icrc.org/pt)
- [Exército de Doações](https://www.exercitodoacoes.org.br/)

---

<p align="center">
  <strong>Modas Caridosas — Doe, Troque, Reutilize!</strong>
  <br>
  <sub>Projeto acadêmico desenvolvido com foco em sustentabilidade, acessibilidade e inclusão.</sub>
</p>