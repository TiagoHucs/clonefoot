class Time {
  constructor(nome, tamanho = 5) {
    this.nome = nome;
    this.jogadores = this.criarJogadores(tamanho);
  }

  criarJogadores(tamanho) {
    const lista = [];
    for (let i = 0; i < tamanho; i++) {
      lista.push(new Jogador());
    }
    return lista;
  }

  getForcaTotal() {
    return this.jogadores.reduce((soma, j) => soma + j.forca, 0);
  }

  exibir() {
    console.log(`\nTime: ${this.nome}`);
    this.jogadores.forEach(jogador =>
      console.log(`  - ${jogador.nome} (Força: ${jogador.forca})`)
    );
    console.log(`Total de Força: ${this.getForcaTotal()}`);
  }
}
