const dicionario=['Lua','Estrela','Submarino','livro','caneta','garfo','panela','mesa','cama','microfone','celular','martelo','bolsa','menina','garoto','pai','homem','mulher','professor','médica','estudante','ator','empresário','cachorro','gato','cavalo','tigre','papagaio','mico','capivara','palmeira','roseira','samambaia','capim','coqueiro','girassol','goiaba','banana','pitanga','laranja','limão','mamão','montanha'];

var campoNovaPalavra = document.querySelector("#campoNovaPalavra");

var idBotaoIniciar = document.querySelector("#idBotaoIniciar");
var idBotaoAdicionarPalavra = document.querySelector("#idBotaoAdicionarPalavra");

var idBotaoSalvarIniciar = document.querySelector("#idBotaoSalvarIniciar");
var idBotaoCancelar = document.querySelector("#idBotaoCancelar");

var idBotaoNovoJovo = document.querySelector("#idBotaoNovoJovo");
var idBotaoDesistir = document.querySelector("#idBotaoDesistir");

var idCaracteresDigitados = document.querySelector("#oculto");

var letrasdigitadas = document. getElementById('oculto');


reiniciarTelaInicial();  //iniciar os botões padrões

function reiniciarTelaInicial(){

//bloco para iniciar os botões padrões
    
document.querySelector('.botaoAdicionarPalavra').style.display='initial';
document.querySelector(".botaoIniciar").style.display='initial';
document.querySelector('.botaoSalvarIniciar').style.display='none';
document.querySelector(".avisoDigitacao").style.display='none';
document.querySelector(".botaoCancelar").style.display='none';
document.querySelector('.botaoNovoJovo').style.display='none';
document.querySelector('.botaoDesistir').style.display='none';
}


idCaracteresDigitados.addEventListener('keydown', logKey);

function logKey(e) {
  
    idCaracteresDigitados.focus();


  }

  letrasdigitadas.addEventListener('keyup', logKey2);

function logKey2(e) {

    compararLetradigitadaComPalavraSecreta();

  }

  function toUnicode(str) {       // código adaptado de https://gist.github.com/littlee/f726f61b1e0abd319da4
    return str.split('').map(function (value, index, array) {
        var temp = value.charCodeAt(0).toString(16).toUpperCase();
        if (temp.length == 2) {
            return "00"+ temp;
        }

        if (temp.length == 3) {
            return "0"+ temp;
        }

        if (temp.length == 1) {
            return "000"+ temp;
        }
        return temp;
    }).join('');
}

var contagem=0; //contador da forca

function compararLetradigitadaComPalavraSecreta(){

    var letrasJogador = letrasdigitadas.value;
    var ultimaLetraDigitada= letrasJogador[letrasJogador.length-1]    //ultima letra digitada pelo jogador
    var palavraSecreta = document.querySelectorAll(".letraPalavraSecreta");

    

    
    for(var i =0;i<palavraSecreta.length;i++){
        
        if(!(ultimaLetraDigitada.toLowerCase==="undefined")){
            if(palavraSecreta[i].textContent==ultimaLetraDigitada)
            {
            
                        console.log("OK");
                        if(contagem<10){                            //DESENHA FORCA
                            montagemForca(contagem,'initial');
                            contagem++;
                     
                        }
                        else{location.reload();}
             
            }
            
               // if(!(palavraSecreta[i].textContent==ultimaLetraDigitada))
                //if(contagem<10){                            //DESENHA FORCA
                //    montagemForca(contagem,'initial');
               //     contagem++;
               //     return;
               //     }
        
           
        }

        
    }


    

}

idBotaoDesistir.addEventListener("click", function() {

    for(var i = 0; i<10;i++)        //zera boneco
    montagemForca(9-i,'none');

    location.reload();// recarrega a URL
});

function numeroAleatorio(){

    return Math.floor(Math.random() * (dicionario.length));
}

function iniciarJogo(){
    
    telaJogo();

    var escolhaPalavraAleatoria=numeroAleatorio();
    var palavra;
    palavra=dicionario[escolhaPalavraAleatoria];

    for(var i =0;i<=palavra.length;){
        carregarPalavraSecreta(palavra[palavra.length-i]);
        i++;
    }

    idCaracteresDigitados.focus();

    /*for(var i =0;i<"LEANDRO".length;i++)
    {
        carregarPalavraSecreta("LEANDRO"[i]);
    }*/

}
idBotaoIniciar.addEventListener("click", function() {
    
    iniciarJogo();
    
    
});



idBotaoAdicionarPalavra.addEventListener("click", function() {
    
    telaAdicionarPalavra();
});

idBotaoCancelar.addEventListener("click", function() {
    
    reiniciarTelaInicial();
});



idBotaoNovoJovo.addEventListener("click", function() {
    
    var palavraSecreta = document.querySelectorAll(".letraPalavraSecreta");
    letrasdigitadas.value = "";     // limpa letras digitadas o jogo anterior (campo input)
    
    for(var i =0;i<palavraSecreta.length;i++)
    palavraSecreta[i].outerHTML="";


    iniciarJogo();
    
         

});


function telaAdicionarPalavra(){

    if(document.querySelector('.avisoDigitacao').style.display=='none'){
        document.querySelector('.avisoDigitacao').style.display = 'initial';
        document.querySelector('.botaoSalvarIniciar').style.display='initial';
        document.querySelector(".avisoDigitacao").style.display='initial';
        document.querySelector(".botaoCancelar").style.display='initial';

        document.querySelector('.botaoAdicionarPalavra').style.display='none';
        document.querySelector(".botaoIniciar").style.display='none';

        document.querySelector('.avisoDigitacao').value="";
            
        document.querySelector('.botaoNovoJovo').style.display='none';
        document.querySelector('.botaoDesistir').style.display='none';

    }

}
function apagarForca(array){



}

function montagemForca(posicao,status){

   var astemaior = document.querySelector('.astemaior');
   var astemenor = document.querySelector('.astemenor');
   var base = document.querySelector('.base');
   var bracodireito = document.querySelector('.bracodireito');
   var bracoesquerdo = document.querySelector('.bracoesquerdo');
   var cabeca = document.querySelector('.cabeca');
   var corda = document.querySelector('.corda');
   var pernadireita = document.querySelector('.pernadireita');
   var pernaesquerda = document.querySelector('.pernaesquerda');
   var tronco = document.querySelector('.tronco');

   var forca = [base,astemaior,astemenor,corda,cabeca,tronco,bracoesquerdo,bracodireito,pernaesquerda,pernadireita];
 
   forca[posicao].style.display=status;
}

function telaJogo(){

    document.querySelector('.avisoDigitacao').style.display = 'none';
    document.querySelector('.botaoSalvarIniciar').style.display='none';
    document.querySelector(".avisoDigitacao").style.display='none';
    document.querySelector(".botaoCancelar").style.display='none';

    document.querySelector('.botaoAdicionarPalavra').style.display='none';
    document.querySelector(".botaoIniciar").style.display='none';

    document.querySelector('.botaoNovoJovo').style.display='initial';
    document.querySelector('.botaoDesistir').style.display='initial';


}

function insertAfter(newElement, reference) {
    reference.parentNode.insertBefore(newElement, reference.nextSibling);
}



function carregarPalavraSecreta(letra){
    
  /* Testando */
 el = document.createElement("div")

el.textContent= letra;
const div = document.querySelector(".palavraSecreta");
el.classList.add("letraPalavraSecreta");
insertAfter(el, div);

}