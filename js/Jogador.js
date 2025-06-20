class Jogador {
  constructor() {
    this.nome = this.sortearNome();
    this.forca = this.sortearForca();
  }

  sortearNome() {
    const indice = Math.floor(Math.random() * NOMES_JOGADORES.length);
    return NOMES_JOGADORES[indice];
  }

  sortearForca() {
    return Math.floor(Math.random() * 100) + 1; // entre 1 e 100
  }

  exibir() {
    console.log(`Nome: ${this.nome}, Força: ${this.forca}`);
  }

}
