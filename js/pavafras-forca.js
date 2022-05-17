const palavras = [
    "DESAFIO", 
    "TERAPIA", 
    "FAZENDA", 
    "CAIXOTE", 
    "OMELETE", 
    "BRASIL"
];

export function adicionarPalavra(texto){
    palavras.push(texto);
}

export function sortearPalavra(){
    var sortiandoNumeroDaPalavra = Math.floor(Math.random()*palavras.length);
    var palavraSorteada = palavras[sortiandoNumeroDaPalavra];    
    return palavraSorteada;
}

export function contarCaracter(valor){ 
    var cont = valor.length; 
    if(cont == 1 || cont == 0){ 
        var numero = cont; 
    }else{ 
        var numero = cont; 
    } 
    console.log("Número de Letras:" + numero);

    return numero;
}

export function verificaPalavraRepetida(texto){
    for(var i = 0; i < palavras.length; i++){
        if(texto == palavras[i]){
            alert("( "+ texto + " ) Essa palavra ja temos no banco de dados")
        }else{
            var letraMaiuscula = texto.toUpperCase();
            adicionarPalavra(letraMaiuscula);

            var resultado2 = contarCaracter(letraMaiuscula);

            //console.log("Palavra: "+ letraMaiuscula);
            console.log("Lista de palavras:" + palavras);
        };
    };
}

export function filtrarLetras(texto) { //retorna false ou true para letras maiusculas
    const Regex = /^[A-Z\s]+$/;
    var resultado  = Regex.test(texto);
    return resultado;
}