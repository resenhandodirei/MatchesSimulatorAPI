const time1 = {
    nome: "São Paulo Vôlei",
    jogadores: [
      {
        nome: "João Silva",
        posicao: "Levantador",
        atributos: {
          ataque: 75,
          bloqueio: 60,
          defesa: 80,
          passe: 90,
          saque: 85,
          regularidade: 88
        }
      },
      {
        nome: "Carlos Santos",
        posicao: "Ponteiro",
        atributos: {
          ataque: 90,
          bloqueio: 70,
          defesa: 80,
          passe: 75,
          saque: 80,
          regularidade: 85
        }
      },
      {
        nome: "Lucas Pereira",
        posicao: "Líbero",
        atributos: {
          ataque: 60,
          bloqueio: 50,
          defesa: 95,
          passe: 85,
          saque: 70,
          regularidade: 90
        }
      }
    ],
    atributosEquipe: {
      ataqueTotal: 75,
      bloqueioTotal: 60,
      defesaTotal: 80,
      passeTotal: 85,
      saqueTotal: 83,
      regularidadeTotal: 87
    }
  };
  
  const time2 = {
    nome: "Rio de Janeiro Vôlei",
    jogadores: [
      {
        nome: "Pedro Costa",
        posicao: "Levantador",
        atributos: {
          ataque: 70,
          bloqueio: 65,
          defesa: 75,
          passe: 85,
          saque: 80,
          regularidade: 80
        }
      },
      {
        nome: "Thiago Almeida",
        posicao: "Ponteiro",
        atributos: {
          ataque: 85,
          bloqueio: 75,
          defesa: 70,
          passe: 80,
          saque: 85,
          regularidade: 80
        }
      },
      {
        nome: "Bruno Oliveira",
        posicao: "Líbero",
        atributos: {
          ataque: 55,
          bloqueio: 50,
          defesa: 90,
          passe: 80,
          saque: 65,
          regularidade: 88
        }
      }
    ],
    atributosEquipe: {
      ataqueTotal: 70,
      bloqueioTotal: 63,
      defesaTotal: 78,
      passeTotal: 81,
      saqueTotal: 77,
      regularidadeTotal: 82
    }
  };
  
  const time3 = {
    nome: "Minas Tênis Clube",
    jogadores: [
      {
        nome: "Marcos Lima",
        posicao: "Levantador",
        atributos: {
          ataque: 75,
          bloqueio: 60,
          defesa: 80,
          passe: 90,
          saque: 85,
          regularidade: 85
        }
      },
      {
        nome: "André Silva",
        posicao: "Ponteiro",
        atributos: {
          ataque: 88,
          bloqueio: 78,
          defesa: 80,
          passe: 75,
          saque: 85,
          regularidade: 82
        }
      },
      {
        nome: "Rafael Souza",
        posicao: "Líbero",
        atributos: {
          ataque: 60,
          bloqueio: 55,
          defesa: 92,
          passe: 85,
          saque: 70,
          regularidade: 90
        }
      }
    ],
    atributosEquipe: {
      ataqueTotal: 74,
      bloqueioTotal: 64,
      defesaTotal: 84,
      passeTotal: 83,
      saqueTotal: 80,
      regularidadeTotal: 85
    }
  };
  
  const time4 = {
    nome: "Sada Cruzeiro",
    jogadores: [
      {
        nome: "Felipe Costa",
        posicao: "Levantador",
        atributos: {
          ataque: 77,
          bloqueio: 68,
          defesa: 79,
          passe: 88,
          saque: 83,
          regularidade: 84
        }
      },
      {
        nome: "Gustavo Oliveira",
        posicao: "Ponteiro",
        atributos: {
          ataque: 91,
          bloqueio: 73,
          defesa: 81,
          passe: 78,
          saque: 84,
          regularidade: 80
        }
      },
      {
        nome: "João Rodrigues",
        posicao: "Líbero",
        atributos: {
          ataque: 58,
          bloqueio: 50,
          defesa: 94,
          passe: 82,
          saque: 65,
          regularidade: 89
        }
      }
    ],
    atributosEquipe: {
      ataqueTotal: 75,
      bloqueioTotal: 63,
      defesaTotal: 85,
      passeTotal: 83,
      saqueTotal: 78,
      regularidadeTotal: 84
    }
  };
  
  console.log(time1);
  console.log(time2);
  console.log(time3);
  console.log(time4);

const campeonato = {
    nome: "Superliga Nacional 2025",
    dataInicio: "2025-01-15",
    dataFim: "2025-04-30",
    formato: "Eliminatório simples", // ou "Pontos corridos"
    equipes: [time1, time2, time3, time4], // times participantes
    jogos: [], // Aqui você pode armazenar os jogos e resultados das partidas
    faseAtual: "Quartas de final", // Pode ser "Fase de grupos", "Quartas", "Semifinal", "Final"
    status: "Em andamento", // Ou "Finalizado"
    regras: {
      pontuacao: "3-0 ou 3-1 = 3 pontos para o vencedor, 0 para o perdedor",
      "vitoriaParcial": "O time que vencer por 3-2 recebe 2 pontos, o perdedor 1 ponto"
    }
};

function simularPartida(time1, time2) {
    // Cálculo de probabilidade baseado nos atributos do time
    let probabilidadeTime1 = (time1.atributosEquipe.ataqueTotal + time1.atributosEquipe.defesaTotal + time1.atributosEquipe.passeTotal) / 3;
    let probabilidadeTime2 = (time2.atributosEquipe.ataqueTotal + time2.atributosEquipe.defesaTotal + time2.atributosEquipe.passeTotal) / 3;
    
    let resultado = "Empate";
    
    if (probabilidadeTime1 > probabilidadeTime2) {
      resultado = `${time1.nome} vence`;
    } else if (probabilidadeTime2 > probabilidadeTime1) {
      resultado = `${time2.nome} vence`;
    }
    
    return resultado;
}

function atualizarClassificacao(campeonato, resultadoJogo) {
    // Simulação de como o resultado de uma partida pode alterar a classificação
    if (resultadoJogo === `${campeonato.equipes[0].nome} vence`) {
      campeonato.equipes[0].pontos += 3;
      campeonato.equipes[1].pontos += 0;
    } else if (resultadoJogo === `${campeonato.equipes[1].nome} vence`) {
      campeonato.equipes[1].pontos += 3;
      campeonato.equipes[0].pontos += 0;
    } else {
      // Empate
      campeonato.equipes[0].pontos += 1;
      campeonato.equipes[1].pontos += 1;
    }
  
    // Ordena os times pela quantidade de pontos
    campeonato.equipes.sort((a, b) => b.pontos - a.pontos);
}

const estatisticasJogo = {
    time1: {
      pontos: 3,
      bloqueios: 10,
      saques: 5,
      ataques: 30,
      erros: 15
    },
    time2: {
      pontos: 2,
      bloqueios: 8,
      saques: 6,
      ataques: 28,
      erros: 18
    }
};
  
function avancarFase(campeonato) {
    if (campeonato.faseAtual === "Fase de grupos") {
      campeonato.faseAtual = "Quartas de final";
    } else if (campeonato.faseAtual === "Quartas de final") {
      campeonato.faseAtual = "Semifinal";
    } else if (campeonato.faseAtual === "Semifinal") {
      campeonato.faseAtual = "Final";
    } else {
      campeonato.status = "Finalizado";
    }
}


function atualizarAtributosJogador(jogador, desempenho) {
    jogador.atributos.ataque += desempenho.ataque;
    jogador.atributos.bloqueio += desempenho.bloqueio;
    jogador.atributos.defesa += desempenho.defesa;
    jogador.atributos.passe += desempenho.passe;
    jogador.atributos.saque += desempenho.saque;
    jogador.atributos.regularidade += desempenho.regularidade;
}
  