
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

];

var perguntaAtual = 0; 
var pontuacao = 0; 


    function carregarPergunta() {
        var Pergunta = document.getElementById('texto-pergunta');
        var opcoes = document.getElementById('container-opcoes');
        var dadosPerguntaAtual = dadosQuiz[perguntaAtual];


        Pergunta.innerHTML = dadosPerguntaAtual.pergunta;
        opcoes.innerHTML = '';


        dadosPerguntaAtual.opcoes.forEach(opcao => {
            var botao = document.createElement('button');
            botao.textContent = opcao;
            botao.classList.add('opcao-btn');
            botao.addEventListener('click', () => verificarResposta(opcao));
            opcoes.appendChild(botao);
        });

        
        document.getElementById('btn-proxima').disabled = true;
    }

    
    function verificarResposta(respostaUsuario) {
        var dadosPerguntaAtual = dadosQuiz[perguntaAtual];
        var elementoTextoFeedback = document.getElementById('texto-feedback');

        
        if (respostaUsuario === dadosPerguntaAtual.resposta) {
            pontuacao++; 
            elementoTextoFeedback.innerHTML = "Resposta correta!";
            elementoTextoFeedback.style.color = "green";
        } else {
            elementoTextoFeedback.innerHTML = "Resposta incorreta.";
            elementoTextoFeedback.style.color = "red";
        }

        
        document.getElementById('btn-proxima').disabled = false;

        
        var botoesOpcao = document.querySelectorAll('.opcao-btn');
        botoesOpcao.forEach(botao => {
            botao.disabled = true;
        });
    }

    
    function proximaPergunta() {
        perguntaAtual++; 

        
        if (perguntaAtual < dadosQuiz.length) {
            carregarPergunta(); 
        } else {
        
            var Pergunta = document.getElementById('texto-pergunta');
            Pergunta.innerHTML = `Você acertou ${pontuacao} de ${dadosQuiz.length} perguntas.`;

             
            document.getElementById('container-opcoes').innerHTML = '';
            document.getElementById('texto-feedback').innerHTML = '';

            
            document.getElementById('btn-proxima').style.display = 'none';
        }
    }

    
    carregarPergunta();