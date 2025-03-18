# Simulador de Partidas de Vôlei - Campeonato Nacional

Este projeto tem como objetivo simular partidas de vôlei em campeonatos nacionais, levando em consideração as características dos times, jogadores, sets e a pontuação. A simulação é feita com base em atributos definidos para cada time e jogador, proporcionando uma dinâmica realista nas partidas e na classificação dos times.

## Regras de Negócio

### 1. **Times e Jogadores**

Aqui estão os principais times que competem no campeonato nacional, com seus respectivos jogadores, posições e atributos individuais:

#### 1.1 **Time: São Paulo Vôlei**

- **Jogadores:**
  - **Jogador:** João Silva
    - **Posição:** Levantador
    - **Atributos:**
      - Ataque: 75
      - Bloqueio: 60
      - Defesa: 80
      - Passe: 90
      - Saque: 85
      - Regularidade: 88

  - **Jogador:** Carlos Santos
    - **Posição:** Ponteiro
    - **Atributos:**
      - Ataque: 90
      - Bloqueio: 70
      - Defesa: 80
      - Passe: 75
      - Saque: 80
      - Regularidade: 85

  - **Jogador:** Lucas Pereira
    - **Posição:** Líbero
    - **Atributos:**
      - Ataque: 60
      - Bloqueio: 50
      - Defesa: 95
      - Passe: 85
      - Saque: 70
      - Regularidade: 90

#### 1.2 **Time: Rio de Janeiro Vôlei**

- **Jogadores:**
  - **Jogador:** Pedro Costa
    - **Posição:** Levantador
    - **Atributos:**
      - Ataque: 70
      - Bloqueio: 65
      - Defesa: 75
      - Passe: 85
      - Saque: 80
      - Regularidade: 80

  - **Jogador:** Thiago Almeida
    - **Posição:** Ponteiro
    - **Atributos:**
      - Ataque: 85
      - Bloqueio: 75
      - Defesa: 70
      - Passe: 80
      - Saque: 85
      - Regularidade: 80

  - **Jogador:** Bruno Oliveira
    - **Posição:** Líbero
    - **Atributos:**
      - Ataque: 55
      - Bloqueio: 50
      - Defesa: 90
      - Passe: 80
      - Saque: 65
      - Regularidade: 88

#### 1.3 **Time: Minas Tênis Clube**

- **Jogadores:**
  - **Jogador:** Marcos Lima
    - **Posição:** Levantador
    - **Atributos:**
      - Ataque: 75
      - Bloqueio: 60
      - Defesa: 80
      - Passe: 90
      - Saque: 85
      - Regularidade: 85

  - **Jogador:** André Silva
    - **Posição:** Ponteiro
    - **Atributos:**
      - Ataque: 88
      - Bloqueio: 78
      - Defesa: 80
      - Passe: 75
      - Saque: 85
      - Regularidade: 82

  - **Jogador:** Rafael Souza
    - **Posição:** Líbero
    - **Atributos:**
      - Ataque: 60
      - Bloqueio: 55
      - Defesa: 92
      - Passe: 85
      - Saque: 70
      - Regularidade: 90

#### 1.4 **Time: Sada Cruzeiro**

- **Jogadores:**
  - **Jogador:** Felipe Costa
    - **Posição:** Levantador
    - **Atributos:**
      - Ataque: 77
      - Bloqueio: 68
      - Defesa: 79
      - Passe: 88
      - Saque: 83
      - Regularidade: 84

  - **Jogador:** Gustavo Oliveira
    - **Posição:** Ponteiro
    - **Atributos:**
      - Ataque: 91
      - Bloqueio: 73
      - Defesa: 81
      - Passe: 78
      - Saque: 84
      - Regularidade: 80

  - **Jogador:** João Rodrigues
    - **Posição:** Líbero
    - **Atributos:**
      - Ataque: 58
      - Bloqueio: 50
      - Defesa: 94
      - Passe: 82
      - Saque: 65
      - Regularidade: 89

---

### 2. **Partidas**
   - **Cada partida** é disputada entre dois times: um time **mandante** e um time **visitante**.
   - **Formato dos Sets:**
     - A partida é dividida em até 5 sets.
     - Cada set é disputado até que um time marque 25 pontos, com uma diferença mínima de 2 pontos (ex: 25-23).
     - Se o jogo chegar ao quinto set, o set é disputado até 15 pontos, com a mesma diferença mínima de 2 pontos.
   - O time que vencer 3 sets primeiro, ganha a partida.

### 3. **Simulação dos Sets**
   - **Geração dos Pontos do Set:** 
     - A cada set, o desempenho de ambos os times é calculado com base nos seus atributos e no fator aleatório que representa a dinâmica de um jogo real.
     - O **atributo ataque** de cada time, por exemplo, será somado ao fator aleatório para determinar quantos pontos o time marcará durante o set.
     - O time com o maior total de pontos ao final de um set é declarado vencedor do set.
   - **Simulação do Saque e Bloqueio:**
     - **Saque:** O time com maior atributo de saque tem uma maior chance de marcar pontos diretamente de um saque.
     - **Bloqueio:** O time com maior atributo de bloqueio tem uma maior chance de impedir os ataques adversários.

### 4. **Estatísticas de Jogadores**
   - Durante a simulação, as estatísticas dos jogadores são registradas:
     - **Pontos:** Número de pontos marcados por cada jogador durante o set.
     - **Aces:** Número de aces (pontos feitos diretamente de um saque).
     - **Bloqueios:** Número de ataques bloqueados com sucesso.
     - **Erros:** Número de erros cometidos (como falhas no saque ou ataques errados).

### 5. **Classificação dos Times**
   - **Sistema de Pontuação:**
     - A cada vitória, o time recebe **3 pontos**.
     - Se um time perde a partida, mas conquista pelo menos 1 set, ele recebe **1 ponto** (pontos de set).
     - Caso o time perca a partida sem ganhar nenhum set, ele não recebe pontos.
   - **Critérios de Classificação:**
     - Os times são classificados com base no número de pontos acumulados.
     - Caso haja empate em pontos, o critério de desempate será o **número de sets vencidos**.
     - Caso ainda haja empate, será considerado o **número de pontos balanceados** (diferença entre os pontos marcados e pontos sofridos).

### 6. **Resultado da Partida**
   - **Vencedor da Partida:** O time que conquistar 3 sets primeiro.
   - **Atualização de Estatísticas:**
     - Após o fim de cada partida, as estatísticas de cada jogador e os resultados do set são registrados e armazenados.
     - A **classificação** dos times é atualizada, levando em consideração os pontos conquistados e a performance nas partidas.

### 7. **Funções Adicionais**
   - **Simulação Automática de Campeonato:**
     - O simulador permite que um campeonato completo seja simulado automaticamente, com múltiplas partidas entre todos os times participantes.
     - A cada rodada, a classificação do campeonato é atualizada automaticamente com base nos resultados das partidas.
   - **Interface de Acompanhamento:**
     - O simulador fornece uma interface para acompanhar os jogos em tempo real, com atualizações dos pontos e estatísticas dos jogadores.

---

## Tecnologias Utilizadas

- **Banco de Dados:** PostgreSQL
- **Linguagem de Programação:** JavaScript (para simulação e lógica do jogo)
- **Framework de Front-end (se aplicável):** React (para visualização das partidas e da classificação)

---

## Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/simulador-de-volei.git
Instale as dependências:

bash
Copy
Edit
cd simulador-de-volei
pip install -r requirements.txt
Configuração do Banco de Dados:

Certifique-se de que o banco de dados PostgreSQL está instalado e configurado corretamente. Execute o script SQL para criar as tabelas necessárias.

Rodando o Simulador:

bash
Copy
Edit
python simulador.py
Acesse a interface do campeonato ou as informações sobre a partida no seu navegador.

Contribuição
Se você deseja contribuir para o projeto, fique à vontade para abrir um pull request ou enviar uma issue. Estamos sempre abertos a melhorias!
