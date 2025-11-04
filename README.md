
# Título do Projeto

Mini projeto - Pontuação dos atletas

Este projeto foi desenvolvido como parte do processo de um exercício em JavaScript.

O objetivo é criar uma aplicação que receba o nome e as notas de um atleta, calcule a média válida (desconsiderando a maior e a menor nota) e exiba o resultado final no console.

A aplicação foi implementada com base na **Programação Orientada a Objetos (POO)**, utilizando uma classe chamada `Atleta`.

## Estrutura da Classe

A classe `Atleta` possui:

- **constructor(nome, notas)**: inicializa o atleta com seu nome e suas cinco notas.
- **calcularMedia()**: ordena as notas, remove a maior e a menor, e calcula a média das três restantes.
- **exibirResultado()**: mostra no console o nome do atleta, suas notas e a média válida.

## Código de Exemplo

```
// Criar a classe Atleta
class Atleta {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    // Calcular a média válida
    calcularMedia() {
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        let notasComputadas = notasOrdenadas.slice(1, 4);

        let soma = 0;

        notasComputadas.forEach(nota => soma += nota);

        let media = soma / notasComputadas.length;

        return media;
    }

    exibirResultado() {
        let media = this.calcularMedia();
        console.log(`Atleta: ${this.nome}`);
        console.log(`Notas Obtidas: ${this.notas}`);
        console.log(`Média Válida: ${media}\n`);
    }
}

// A base de dados dos atletas
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// Laço que percorre todos os atletas da base de dados
for (i = 0; i < atletas.length; i++) {
    let atleta = new Atleta(atletas[i].nome, atletas[i].notas); // Cria um novo objeto Atleta com nome e notas do atleta atual
    atleta.exibirResultado(); // Exibe o resultado do atleta no console
}
```

// A base de dados dos atletas
let atletas = [{nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88]}, {nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33]}, {nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8]}, {nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5]}];

// Laço que percorre todos os atletas da base de dados

for (i = 0; i < atletas.length; i++) {
     let atleta = new Atleta(atletas[i].nome, atletas[i].notas); // Cria um novo objeto Atleta com nome e notas do atleta atual
     atleta.exibirResultado(); // Exibe o resultado do atleta no console
}

## Exemplo de Saída
Atleta: Cesar Abascal
Notas Obtidas: 7.88, 8.42, 9.34, 10, 10
Média Válida: 9.253333

Atleta: Fernando Puntel
Notas Obtidas: 7, 8, 9.33, 10, 10
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 7, 8, 9.5, 9.5, 10
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 9, 9.5, 10, 10, 10
Média Válida: 9.83333333333

## Instalação

Instale my-project com npm

```bash
  npm install my-project
  cd my-project
```
1. Crie um arquivo chamado `notas-atletas.js`.
2. Copie e cole o código acima dentro do arquivo.
3. Abra o terminal na pasta onde o arquivo foi salvo.
4. Execute o comando:

   node notas-atletas.js

5. Veja os resultados no console.
   
## Conceitos Praticados
- Classes e construtores em JavaScript
- Métodos de arrays: .sort(), .slice(), .forEach()
- Manipulação de objetos e matrizes
- Estrutura de repetição for
- Cálculo de médias com exclusão de valores extremos
- Exibição de dados formatados no console

## Conclusão

Este projeto consolida os conhecimentos em **Programação Orientada a Objetos** e **manipulação de arrays** em JavaScript.

A estrutura da classe torna o código mais organizado, reutilizável e fácil de entender, simulando uma aplicação real de avaliação esportiva.

Foi um excelente exercício de lógica e boas práticas de desenvolvimento.

## Autores

- [@CarvalhoJones](https://github.com/CarvalhoJones)

Nome: [Jones de Brito]  
Data: Novembro de 2025  
Projeto de certificação 1 - Pontuação dos atletas - DEVstart


