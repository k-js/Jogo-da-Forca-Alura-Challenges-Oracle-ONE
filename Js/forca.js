let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "LOGICA"];
let tabuleiro = document.getElementById("forca").getContext('2d');
let palavraSecreta = "";

let letras = []
let erros = 8

function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra;
    return palavra
}

function verificarLetra(params) {
    let estado = false;
    if(params >= 65 && letras.indexOf(params) || params <= 90 && letras.indexOf(params)){
        letras.push(params)
        console.log(params)
        console.log(letras)
        return estado
    } else {
        estado = true
        letras.push(params)
        console.log(params)
        console.log(letras, "if true")
        return estado
    }
}

function adicionarLetraIncorreta(){
    erros -= 1
    console.log(erros)
    return erros
}

function iniciarJogo(){
    document.getElementById('div-desaparace').style.display = "none";
    escolherPalavraSecreta();
    
    desenharCanvas();
    desenharLinhas()

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()
        if(verificarLetra(letra) && palavraSecreta.includes(letra)){
            for(let i = 0; i<palavraSecreta.length; i++){
                if(palavraSecreta[i] === letra){
                    escreverLetraCorreta(i)
                }
            }
        }else{
            adicionarLetraIncorreta(letra)
            escreverLetraIncorreta(letra, erros)
        }
    }
}