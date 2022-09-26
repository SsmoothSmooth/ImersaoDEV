function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value;
    
    // Termina com .jpg
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmeNaTela(filmeFavorito);
    }else {
        console.error("Endereço de filme invalido")
    }

    document.getElementById("filme").value = ""    


}

function listarFilmeNaTela(filme) {
    var elemenentoFilmeFavorito = "<img src=" + filme + ">"
    var elementoListaFilmes = document.getElementById("listaFilmes")
    
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elemenentoFilmeFavorito;

    
}

