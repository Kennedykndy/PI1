// LOGIN
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = loginForm.querySelector('input[type="text"]').value;

  if (usuario === "") {
    alert("Digite um usuário.");
    return;
  }

  alert(`Bem-vindo ao Mentra, ${usuario}!`);
});

// CRIAR CONTA
const criarConta = document.querySelector(".criar-conta");

criarConta.addEventListener("click", () => {
  alert("Sistema de contas em desenvolvimento.");
});

// NEWS
const ticker = document.querySelector(".news-ticker");

const noticias = [
  " ⚔ Novo guia PvP disponível!",
  "🏆 Estratégias atualizadas!",
  "🎮 Mentra ganhou novo conteúdo!",
  "🚀 Atualização chegando em breve!",
];

let index = 0;

setInterval(() => {
  index++;

  if (index >= noticias.length) {
    index = 0;
  }

  ticker.textContent = noticias[index];
}, 3000);

// VIDEO
const video = document.querySelector(".video");

video.addEventListener("click", () => {
  window.open("https://www.youtube.com", "_blank");
});

// BRILHO TÍTULO
const titulo = document.querySelector(".center h1");

let glow = true;

setInterval(() => {
  titulo.style.textShadow = glow
    ? "0 0 20px gold, 0 0 40px orange"
    : "0 0 5px gold";

  glow = !glow;
}, 1000);

// CONTEÚDO INICIAL

const homeContent = `
  <h2>
    Guia de estudos sobre jogos +
    passo a passo
  </h2>

  <p class="intro-text">
    Clique em um módulo no menu esquerdo
    para visualizar os estudos específicos.
  </p>

  <img
    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
    alt="Imagem gamer"
  />
`;

// MÓDULOS

const modulos = document.querySelectorAll(".modulo");

const conteudoModulo = document.querySelector("#conteudo-modulo");

const estudos = {
  1: `
    <div class="modulo-conteudo">
      <h2>⚔ MÓDULO 1: FUNDAMENTOS</h2>

      <h3>🎯 Objetivo do módulo</h3>
      <p>
        Aprender toda a base necessária para evoluir em qualquer jogo competitivo.
      </p>

      <h3>⚙ Configurações ideais</h3>
      <ul>
        <li>Sensibilidade ideal</li>
        <li>FPS e desempenho</li>
        <li>Ping e conexão</li>
        <li>Teclas personalizadas</li>
        <li>HUD organizada</li>
      </ul>

      <h3>🎯 Mira e precisão</h3>
      <ul>
        <li>Flick shots</li>
        <li>Rastreamento de alvo</li>
        <li>Tempo de reação</li>
        <li>Crosshair placement</li>
      </ul>

      <h3>🏃 Movimentação avançada</h3>
      <ul>
        <li>Strafing</li>
        <li>Controle de espaço</li>
        <li>Posicionamento defensivo</li>
        <li>Movimentação imprevisível</li>
      </ul>

      <h3>🗺 Leitura de mapa</h3>
      <ul>
        <li>Rotas principais</li>
        <li>Controle de visão</li>
        <li>Locais perigosos</li>
        <li>Áreas seguras</li>
      </ul>

      <h3>⚔ Função das classes</h3>
      <ul>
        <li>Tanque</li>
        <li>Suporte</li>
        <li>DPS</li>
        <li>Controle</li>
      </ul>

      <h3>⚡ Reflexo e resposta rápida</h3>
      <ul>
        <li>Tempo de reação</li>
        <li>Resposta sob pressão</li>
        <li>Velocidade visual</li>
      </ul>
    </div>
  `,

  2: `
    <div class="modulo-conteudo">
      <h2>🛡 MÓDULO 2: CONSISTÊNCIA</h2>

      <h3>🎯 Objetivo do módulo</h3>
      <p>
        Desenvolver evolução constante e evitar oscilações de desempenho.
      </p>

      <h3>📅 Rotina de treino</h3>
      <ul>
        <li>Horários fixos</li>
        <li>Tempo ideal de treino</li>
        <li>Metas semanais</li>
        <li>Descanso correto</li>
      </ul>

      <h3>🧠 Controle emocional</h3>
      <ul>
        <li>Controle da raiva</li>
        <li>Controle do tilt</li>
        <li>Paciência competitiva</li>
      </ul>

      <h3>🎮 Treino diário</h3>
      <ul>
        <li>Treino mecânico</li>
        <li>Treino tático</li>
        <li>Revisão de erros</li>
        <li>Repetição inteligente</li>
      </ul>

      <h3>📞 Comunicação em equipe</h3>
      <ul>
        <li>Comunicação rápida</li>
        <li>Liderança</li>
        <li>Coordenação</li>
        <li>Chamadas objetivas</li>
      </ul>
    </div>
  `,

  3: `
    <div class="modulo-conteudo">
      <h2>🏆 MÓDULO 3: ESTRATÉGIA</h2>

      <h3>🎯 Objetivo do módulo</h3>
      <p>
        Aprender a pensar como jogadores avançados.
      </p>

      <h3>🧩 Tomada de decisão</h3>
      <ul>
        <li>Risco x recompensa</li>
        <li>Timing correto</li>
        <li>Prioridades</li>
        <li>Escolhas inteligentes</li>
      </ul>

      <h3>🗺 Controle de mapa</h3>
      <ul>
        <li>Domínio de áreas</li>
        <li>Rotação inteligente</li>
        <li>Pressão territorial</li>
      </ul>

      <h3>⚔ Estratégias ofensivas</h3>
      <ul>
        <li>Avanços coordenados</li>
        <li>Execução rápida</li>
        <li>Entrada em equipe</li>
      </ul>

      <h3>🎯 Controle de objetivos</h3>
      <ul>
        <li>Timing de objetivos</li>
        <li>Controle de recursos</li>
        <li>Defesa de território</li>
      </ul>
    </div>
  `,

  4: `
    <div class="modulo-conteudo">
      <h2>🧠 MÓDULO 4: MENTALIDADE</h2>

      <h3>🎯 Objetivo do módulo</h3>
      <p>
        Criar uma mentalidade forte e competitiva.
      </p>

      <h3>🎯 Foco e concentração</h3>
      <ul>
        <li>Eliminar distrações</li>
        <li>Atenção contínua</li>
        <li>Controle mental</li>
      </ul>

      <h3>😰 Controle da ansiedade</h3>
      <ul>
        <li>Respiração</li>
        <li>Confiança</li>
        <li>Estabilidade mental</li>
      </ul>

      <h3>📈 Disciplina gamer</h3>
      <ul>
        <li>Organização</li>
        <li>Persistência</li>
        <li>Frequência de treino</li>
      </ul>

      <h3>🔥 Controle emocional</h3>
      <ul>
        <li>Paciência</li>
        <li>Autocontrole</li>
        <li>Recuperação após derrota</li>
      </ul>
    </div>
  `,

  5: `
    <div class="modulo-conteudo">
      <h2>🔥 MÓDULO 5: EVOLUÇÃO</h2>

      <h3>🎯 Objetivo do módulo</h3>
      <p>
        Transformar habilidade em alto desempenho competitivo.
      </p>

      <h3>🎮 Gameplay avançada</h3>
      <ul>
        <li>Mecânicas avançadas</li>
        <li>Combos</li>
        <li>Controle de ritmo</li>
        <li>Adaptação rápida</li>
      </ul>

      <h3>🏆 Treinos profissionais</h3>
      <ul>
        <li>Rotinas profissionais</li>
        <li>Correção de erros</li>
        <li>Alta performance</li>
      </ul>

      <h3>🧩 Estratégias próprias</h3>
      <ul>
        <li>Criatividade</li>
        <li>Leitura do meta</li>
        <li>Estratégias surpresa</li>
      </ul>

      <h3>📺 Streaming e criação</h3>
      <ul>
        <li>Comunicação</li>
        <li>Lives</li>
        <li>Engajamento</li>
        <li>Criação de conteúdo</li>
      </ul>
    </div>
  `,
};

// CLIQUE NOS MÓDULOS

modulos.forEach((modulo) => {
  modulo.addEventListener("click", () => {
    modulos.forEach((m) => {
      m.classList.remove("active");
    });

    modulo.classList.add("active");

    const id = modulo.dataset.modulo;

    conteudoModulo.innerHTML = estudos[id];
  });
});

// VOLTAR PARA HOME

const logoHome = document.querySelector("#logo-home");

logoHome.addEventListener("click", () => {
  modulos.forEach((m) => {
    m.classList.remove("active");
  });

  conteudoModulo.innerHTML = homeContent;
});
