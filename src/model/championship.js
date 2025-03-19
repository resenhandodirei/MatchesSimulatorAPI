class Championship {
    constructor(nome, dataInicio, dataFim, formato, equipes) {
        this.nome = nome;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.formato = formato;
        this.equipes = equipes;
        this.jogos = [];
        this.faseAtual = "Quartas de final";
        this.status = "Em andamento";
    }
}

module.exports = Championship;
