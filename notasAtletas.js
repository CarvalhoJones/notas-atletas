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