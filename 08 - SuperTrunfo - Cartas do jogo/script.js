var carta1 = {
    nome: "Bulbasauro",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth vader",
    imagem:"https://m.media-amazon.com/images/I/51H--lU9YGL.jpg",
    atributos: {
        ataque: 9,
        defesa: 7,
        magia: 6
    }
};

var carta3 = {
    nome: "Shiryu de dragrão",
    imagem:"http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina
var cartaJogador

function sortearCarta() {

    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];


    var numeroCartaJogador = parseInt(Math.random() * 3);

    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }

    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
        
    }

    
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    // console.log(atributoSelecionado)
    // console.log(cartaJogador.atributos[atributoSelecionado])

    if (valorCartaJogador > valorCartaMaquina) {
        HTMLResultado = "<p class='resultado-final'>Venceu</p>"
    } else if (valorCartaMaquina > valorCartaJogador) {
        HTMLResultado = "<p class='resultado-final'>Perdeu</p>"
    } else {
        HTMLResultado = "<p class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = HTMLResultado

    document.getElementById('btnJogar').disabled = true;

    exibirCartaMaquina()
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    // DivcartaJogador.style.backgroundImage="url(" + cartaJogador.imagem +")"

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    // DivcartaJogador.style.backgroundImage="url(" + cartaJogador.imagem +")"

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}