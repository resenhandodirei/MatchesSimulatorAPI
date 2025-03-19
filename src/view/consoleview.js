class ConsoleView {
    static showResult(result) {
        console.log(`Resultado da partida: ${result}`);
    }

    static showRanking(teams) {
        console.log("\nClassificação:");
        teams.forEach((team, index) => {
            console.log(`${index + 1}. ${team.nome} - ${team.pontos} pontos`);
        });
    }
}

module.exports = ConsoleView;
