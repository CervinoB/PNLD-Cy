# PNLD

## Seção 1 -> BDD

### Cenário

Carrinho de compras de um site de comércio eletrônico

```Gherkin
Feature: Carinho de Compras
  Como um cliente
  Eu quero adicionar e remover itens do carrinho de compras
  Para que eu possa comprar produtos facilmente

  Scenario Outline: Adicionar e remover itens do carrinho
    Given que estou na página de um produto
    When eu adiciono <quantidade> unidades do produto ao carrinho
    And eu removo <quantidadeRemover> unidades do produto do carrinho
    Then o carrinho de compras deve conter <quantidadeFinal> unidades do produto

 Examples: 
 | quantidade | quantidadeRemover | quantidadeFinal |
 | 2          | 1                 | 1               |
 | 5          | 3                 | 2               |
  
```

## Seção 2 -> Automação com Cypress

### [GitHub Repo](https://github.com/CervinoB/PNLD)

#### Instalação

##### Clone Repo

```bash
git clone git@github.com:CervinoB/PNLD.git ; cd PNLD
```

##### Install dependecies

```bash
npm install
```

##### Start Cypress

```bash
npx cypress open
```

or run individual e2e tests

```bash
npm run test
```

#### Assets

https://github.com/CervinoB/PNLD/assets/101291672/05e3a90e-46cc-43f6-99bc-c338314627e9

https://github.com/CervinoB/PNLD/assets/101291672/d027b354-b082-45e4-b973-c166e0f89a83

## Seção 3 -> Relatório

O processo de criação de cenários de teste no Gherkin envolve a definição de comportamentos claros e específicos do sistema. Os principais fluxos são login bem-sucedido, adição/remoção de itens do carrinho e finalização do processo de checkout. O projeto Cypress está organizado em quatro etapas: fixtures, integração, plugins, suporte, páginas, comandos.js e index.js.

As dificuldades encontradas incluem seletores dinâmicos, expectativas assíncronas, capturas de tela e vídeos. As soluções incluem o uso de atributos ou seletores de classe, esperando montagens, capturas de tela e vídeos. O processo de automação e eficiência do Cypress inclui execução paralela de testes, integração contínua com ferramentas CI/CD, relatórios detalhados, dados de testes dinâmicos e testes de regressão contínua. O uso do Cypress simplifica e acelera a automação de testes, proporcionando uma experiência clara e eficiente para testadores e desenvolvedores.

---
João Pedro Cervino Barbosa
<jcervinobarbosa@gmail.com>
