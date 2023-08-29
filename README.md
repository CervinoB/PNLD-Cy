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


https://github.com/CervinoB/PNLD/assets/101291672/8464ad10-2125-462b-9b33-2c9d20994b2f



https://github.com/CervinoB/PNLD/assets/101291672/de6d677e-7a8e-4171-bac1-78faaf81e9a6


## Seção 3 -> Relatório

O processo de criação de cenários de teste no Gherkin envolve a definição de comportamentos claros e específicos do sistema. Os principais fluxos são login bem-sucedido, adição/remoção de itens do carrinho e finalização do processo de checkout. O projeto Cypress está organizado em quatro etapas: integração (e2e), suporte, páginas, comandos.js e index.js.

As dificuldades encontradas incluem seletores dinâmicos, configuração e erro de cache. As soluções incluem o uso de atributos ou seletores de classe, limpar o cache antes de rodar os testes, mas mesmo assim as vezes não ia e tinha que ser manual. O processo de automação e eficiência do Cypress poderia ser melhorado com a inclusão de execução paralela de testes, integração contínua com ferramentas CI/CD, maior abrangência de teste. O uso do Cypress simplifica e acelera a automação de testes, proporcionando uma experiência clara e eficiente para testadores e desenvolvedores, ele deveria ser uma ferramenta primária para o controle de qualidade de um software, pois ele automatiza o lento e custoso teste manual, e tem um feedback muito mais rápido, mas ainda não se compara com os testes unitários, por isso eh de muita importância seguir com os conceitos de TDD e BDD na producão de um software, levando em conta a sua qualidade e velocidade no qual esses conceitos podem ajudar.

---
João Pedro Cervino Barbosa
<jcervinobarbosa@gmail.com>
