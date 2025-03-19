function simularPartida(time1, time2) {
    let probTime1 = (time1.atributosEquipe.ataqueTotal + time1.atributosEquipe.defesaTotal + time1.atributosEquipe.passeTotal) / 3;
    let probTime2 = (time2.atributosEquipe.ataqueTotal + time2.atributosEquipe.defesaTotal + time2.atributosEquipe.passeTotal) / 3;
    
    return probTime1 > probTime2 ? `${time1.nome} vence` : `${time2.nome} vence`;
  }
  
  module.exports = { simularPartida };
  