
function iniciar() {

    this.timeA = new Time('Leões');
    this.timeB = new Time('Tigres');

    this.timeA.exibir();
    this.timeB.exibir();

    const forcaA = this.timeA.getForcaTotal();
    const forcaB = this.timeB.getForcaTotal();

    console.log('\n🏆 Resultado:');
    if (forcaA > forcaB) {
        console.log(`${this.timeA.nome} venceram!`);
    } else if (forcaB > forcaA) {
        console.log(`${this.timeB.nome} venceram!`);
    } else {
        console.log('Empate!');
    }

    window.location.href = 'escalacao.html';
}

function iniciarRodada(){
        window.location.href = 'rodada.html';
}


