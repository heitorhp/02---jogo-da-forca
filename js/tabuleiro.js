const palavrasCaregadas = JSON.parse(localStorage.getItem("palavras"));
console.log("Palavras: "+ palavrasCaregadas);

var palavraSorteada = sortearPalavra(palavrasCaregadas);
var numero = contarCaracterPalavra(palavraSorteada);
console.log("Palavra sorteada: "+palavraSorteada);


//var botaoNovoJogo = document.querySelector("#bt-novo-jogo");
//botaoNovoJogo.addEventListener("click", function(event){
//    event.preventDefault();
   
    for(var cont = 0; cont < numero; cont++){

       // var ul = document.querySelector("#linha-com-letras");
        //var liLetras = document.createElement("li");
       // var liImg = document.createElement("li");

        var letrasPalavra = palavraSorteada.split("");
        var paragrafo = document.createElement("p");
        var conteudo = paragrafo.textContent = letrasPalavra[cont];
        //liLetras.textContent = letrasPalavra[cont];
        document.getElementById("letras").appendChild(paragrafo);
        
        var img = document.createElement("img");        
        img.src = "imagens/base-letras.png";
        img.style.height = "2px";
        img.style.margin ="5px";
        document.getElementById("base-letras").appendChild(img);

        //liImg.document.getElementById("linha-com-letras");
        //ul.appendChild(liLetras);
       // ul.appendChild(liImg);
    }
    //console.log("botão clicado");
//});

//trocaImagemAviso(true);
document.addEventListener('keypress', function(event){
    const letraPrecionada = event.key.toUpperCase();
    console.log(verificaLetrarCorreta(letraPrecionada));
    console.log(verificaLetrarErrada(letraPrecionada));
})

function trocaImagemAviso(resultado){
    if(resultado == true){      
        document.querySelector(".img-avisos").style.display="none";
        var mensagens = document.querySelector(".avisos");
        var p = document.createElement("p");
        p.textContent = "Paraêns!! você ganou.";
        mensagens.appendChild(p);
    }else{
        document.querySelector(".img-avisos").style.display="none";
        var mensagens = document.querySelector(".avisos");
        var p = document.createElement("p");
        p.textContent = "Que pena!! você perdeu :(.";
        mensagens.appendChild(p);
    }
}

function sortearPalavra(listaPalavras){
    var sortiandoNumeroDaPalavra = Math.floor(Math.random()*listaPalavras.length);
    var palavraSorteada2 = listaPalavras[sortiandoNumeroDaPalavra];    
    return palavraSorteada2;
}

function verificaLetrarCorreta(letra){    
    x = palavraSorteada.split("");
    for(var cont = 0; cont < numero; cont++){
        if(x[cont] == letra){
            console.log("Letrar Prescionada correta: "+letra);
        }        
    }
}

function verificaLetrarErrada(letra){    
    x = palavraSorteada.split("");
    for(var cont = 0; cont < numero; cont++){
        if(x[cont] != letra){
            console.log("Letrar Prescionada Errada: "+letra);
        }        
    }
}

function contarCaracterPalavra(valor){ 
    var cont = valor.length; 
    if(cont == 1 || cont == 0){ 
        var numero = cont; 
    }else{ 
        var numero = cont; 
    } 
    
    return numero;
}



