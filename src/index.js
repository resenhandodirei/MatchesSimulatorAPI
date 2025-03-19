const Team = require('./model/team');
const Championship = require('./model/championship');
const MatchSimulator = require('./viewmodel/matchsimulator');
const ConsoleView = require('./view/consoleview');

// Exemplo de times
const time1 = new Team("São Paulo Vôlei", [], { ataqueTotal: 75, defesaTotal: 80, passeTotal: 85 });
const time2 = new Team("Rio de Janeiro Vôlei", [], { ataqueTotal: 70, defesaTotal: 78, passeTotal: 81 });

const campeonato = new Championship("Superliga Nacional 2025", "2025-01-15", "2025-04-30", "Eliminatório simples", [time1, time2]);

// Simula o jogo
const resultado = MatchSimulator.simulateMatch(time1, time2);
ConsoleView.showResult(resultado);

// Atualiza pontuação
if (resultado.includes(time1.nome)) time1.pontos += 3;
else if (resultado.includes(time2.nome)) time2.pontos += 3;
else {
    time1.pontos += 1;
    time2.pontos += 1;
}

// Mostra classificação
ConsoleView.showRanking(campeonato.equipes);
