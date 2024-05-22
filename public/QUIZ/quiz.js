// Dados do Quiz (Perguntas, Opções e Respostas)
var dadosQuiz = [
    {
        pergunta: "",
        opcoes: ["Ayrton Senna", "Lewis Hamilton", "Nelson Piquet", "Sebastian Vettel"],
        resposta: ""
    },
    {
        pergunta: "",
        opcoes: ["2015", "2016", "2017", "2018"],
        resposta: ""
    },
    {
        pergunta: "",
        opcoes: ["7 títulos", "5 títulos", "10 títulos", "9 títulos"],
        resposta: ""
    },
    {
        pergunta: "",
        opcoes: ["Max Versapen", "Airton Senna", "Shumacher", "hamilton"],
        resposta: ""
    },
    {
        pergunta: "",
        opcoes: ["Airton Senna", "Michael Schumacher", "alain prost", "nigel mansell"],
        resposta: ""
    },
    {
        pergunta: "",
        opcoes: ["Leclerc / Raikkonen", "Leclerc / Alonso", "Vettel / Raikkonen", "Leclerb / Vettel"],
        resposta: ""
    },
    {
        pergunta: "",
        opcoes: ["Nino Farina", "Alberto Ascari", "Mike Hawthorn", "Juan Manuel Fangio"],
        resposta: ""
    },
    {
        pergunta: "",
        opcoes: ["2007", "2005", "2008", "2006"],
        resposta: ""
    },
    {
        pergunta: "",
        opcoes: ["Britanico", "Canadense", "Estadunidense", "Italiano"],
        resposta: ""
    },
    {
        pergunta: "",
        opcoes: ["Felipe Massa", "Nelson Piquet", "Ayrton Senna", "José Carlos Pace"],
        resposta: ""
    },
    // Adicione mais perguntas conforme necessário
];

var perguntaAtual = 0; // Índice da pergunta atual
var pontuacao = 0; // Pontuação inicial do quiz

// Função para carregar a próxima pergunta
    function carregarPergunta() {
        var Pergunta = document.getElementById('texto-pergunta');
        var opcoes = document.getElementById('container-opcoes');
        var dadosPerguntaAtual = dadosQuiz[perguntaAtual];

        // Exibe a pergunta atual
        Pergunta.innerHTML = dadosPerguntaAtual.pergunta;
        opcoes.innerHTML = ''; // Limpa as opções

        // Adiciona botões para cada opção de resposta
        dadosPerguntaAtual.opcoes.forEach(opcao => {
            var botao = document.createElement('button');
            botao.textContent = opcao;
            botao.classList.add('opcao-btn');
            botao.addEventListener('click', () => verificarResposta(opcao));
            opcoes.appendChild(botao);
        });

        // Desabilita o botão "Próxima Pergunta" até que uma resposta seja selecionada
        document.getElementById('btn-proxima').disabled = true;
    }

    // Função para verificar a resposta selecionada pelo usuário
    function verificarResposta(respostaUsuario) {
        var dadosPerguntaAtual = dadosQuiz[perguntaAtual];
        var elementoTextoFeedback = document.getElementById('texto-feedback');

        // Verifica se a resposta selecionada está correta
        if (respostaUsuario === dadosPerguntaAtual.resposta) {
            pontuacao++; // Incrementa a pontuação se a resposta estiver correta
            elementoTextoFeedback.innerHTML = "Resposta correta!";
            elementoTextoFeedback.style.color = "green";
        } else {
            elementoTextoFeedback.innerHTML = "Resposta incorreta.";
            elementoTextoFeedback.style.color = "red";
        }

        // Habilita o botão "Próxima Pergunta" após responder
        document.getElementById('btn-proxima').disabled = false;

        // Desabilita todos os botões de opção após responder
        var botoesOpcao = document.querySelectorAll('.opcao-btn');
        botoesOpcao.forEach(botao => {
            botao.disabled = true;
        });
    }

    // Função para avançar para a próxima pergunta
    function proximaPergunta() {
        perguntaAtual++; // Avança para a próxima pergunta

        // Verifica se há mais perguntas restantes
        if (perguntaAtual < dadosQuiz.length) {
            carregarPergunta(); // Carrega a próxima pergunta
        } else {
            // Exibe a pontuação final quando todas as perguntas forem respondidas
            var Pergunta = document.getElementById('texto-pergunta');
            Pergunta.innerHTML = `Você acertou ${pontuacao} de ${dadosQuiz.length} perguntas.`;

            // Limpa as opções e o feedback
            document.getElementById('container-opcoes').innerHTML = '';
            document.getElementById('texto-feedback').innerHTML = '';

            // Esconde o botão "Próxima Pergunta" no final do quiz
            document.getElementById('btn-proxima').style.display = 'none';
        }
    }

    // Carrega a primeira pergunta ao carregar a página
    carregarPergunta();



    for(var i = 0; i < perguntas.length; i++){

        dadosQuiz[i].pergunta = perguntas[i].pergunta;// Quem é o piloto com mais vitórias em uma única temporada na Fórmula 1?
        dadosQuiz[i].resposta = perguntas[i].resposta;
    }