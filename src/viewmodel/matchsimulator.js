class MatchSimulator {
    static simulateMatch(team1, team2) {
        const prob1 = (team1.atributosEquipe.ataqueTotal + team1.atributosEquipe.defesaTotal + team1.atributosEquipe.passeTotal) / 3;
        const prob2 = (team2.atributosEquipe.ataqueTotal + team2.atributosEquipe.defesaTotal + team2.atributosEquipe.passeTotal) / 3;
        
        if (prob1 > prob2) return `${team1.nome} vence`;
        else if (prob2 > prob1) return `${team2.nome} vence`;
        else return 'Empate';
    }
}

module.exports = MatchSimulator;
