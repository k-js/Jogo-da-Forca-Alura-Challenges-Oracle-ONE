let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "LOGICA"];
let tabuleiro = document.getElementById("forca").getContext('2d');
let palavraSecreta = "";


function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra;
    console.log(palavraSecreta)
}







function iniciarJogo(){
    document.getElementById('div-desaparace').style.display = "none";
    
    escolherPalavraSecreta();
    desenharCanvas();
    desenharLinhas()
}