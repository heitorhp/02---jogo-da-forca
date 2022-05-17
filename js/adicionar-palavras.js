
const palavras = ["DESAFIO", "TERAPIA", "FAZENDA", "CAIXOTE", "OMELETE", "BRASIL"];
localStorage.setItem("palavras", JSON.stringify(palavras));


var botaoSalvarComecar = document.querySelector("#bt-salvar-comecar");
botaoSalvarComecar.addEventListener("click",function(event){
    event.preventDefault();

    var novaPalavra = document.querySelector(".adiciona-palavra").value;
    if(novaPalavra != ""){
        
        var letraMaiuscula = novaPalavra.toUpperCase();
        adicionarPalavra(letraMaiuscula);
        localStorage.setItem("palavras", JSON.stringify(palavras));//salvar dados para buscar em outra página

        //var resultado2 = contarCaracter(letraMaiuscula);

        console.log("Palavra: "+ letraMaiuscula);
        console.log("Lista de palavras:" + palavras);
               
    }else{
        alert("este campo não pode ficar vazio!");
    }
    
});

function adicionarPalavra(texto){
    palavras.push(texto);
}

function verificaPalavraRepetida(texto){
    for(var i = 0; i < palavras.length; i++){
        if(texto == palavras[i]){
            alert("( "+ texto + " ) Essa palavra ja temos no banco de dados");
            break;
        }else{
            var letraMaiuscula = texto.toUpperCase();
            adicionarPalavra(letraMaiuscula);

            var resultado2 = contarCaracter(letraMaiuscula);

            //console.log("Palavra: "+ letraMaiuscula);
            console.log("Lista de palavras:" + palavras);
            break;
        };
    };
}

function filtrarLetras(texto) { //retorna false ou true para letras maiusculas
    const Regex = /^[A-Z\s]+$/;
    var resultado  = Regex.test(texto);
    return resultado;
}

