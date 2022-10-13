let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "LOGICA"];
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let tabuleiro = document.getElementById("forca").getContext('2d');
let inputPalavra = document.querySelector("#input-nova-palavra");
let novaPalavraSecreta = document.getElementById('salvar-iniciar');
let palavraSecreta = "";
let teclaAcionada = "";
let resultado = "";
let erros = 8
let letras = []



function addNovaPalavra(){

	if(inputPalavra.value==""){
		iniciarJogo();
	} else if (palavras.includes(inputPalavra.value.toUpperCase())){
		document.querySelector("#input-nova-palavra").value="";
		iniciarJogo();
	} else{
        palavras.push(inputPalavra.value.toUpperCase());
        document.querySelector("#input-nova-palavra").value="";
        iniciarJogo();
    }  			  
}


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