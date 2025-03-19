class Team {
    constructor(nome, jogadores, atributosEquipe) {
        this.nome = nome;
        this.jogadores = jogadores;
        this.atributosEquipe = atributosEquipe;
        this.pontos = 0; // Controla a pontuação no campeonato
    }
}

module.exports = Team;
