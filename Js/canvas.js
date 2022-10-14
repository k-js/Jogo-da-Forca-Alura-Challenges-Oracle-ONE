function desenharCanvas() {

    tabuleiro.LineWidth = 8;
    tabuleiro.LineCap = "round";
    tabuleiro.LineJoin = "round";
    tabuleiro.fillStyle = " #F3f5fc";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.fillRect(0,0,1200,800)
    tabuleiro.beginPath();
    tabuleiro.moveTo(900,500);
    tabuleiro.lineTo(650,500);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function desenharLinhas() {
    tabuleiro.LineWidth = 6;
    tabuleiro.LineCap = "round";
    tabuleiro.LineJoin = "round";
    tabuleiro.fillStyle = " #F3f5fc";
    tabuleiro.strokeStyle = "#0A3871";
    
    let largura = 600/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(500+(largura*i), 640)
        tabuleiro.lineTo(550+(largura*i), 640)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function escreverLetraCorreta(index){
    tabuleiro.font = "bold 52px Inter"
    tabuleiro.LineCap = "round"
    tabuleiro.fillStyle = "#0A3871"
    tabuleiro.LineWidth = 6
    let largura = 600/palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index], 508 + (largura * index), 610)
}

function escreverLetraIncorreta(letra, erro){
    tabuleiro.font = "bold 40px Inter"
    tabuleiro.LineCap = "round"
    tabuleiro.fillStyle = "#0A3871"
    tabuleiro.LineWidth = 6
    tabuleiro.fillText(letra, 520 + (40*(10 - erros)),700, 40)
}

function desenhaForca(){
    tabuleiro.lineWidth = 6;
    tabuleiro.moveTo(650,200);
    tabuleiro.lineTo(650,20);
    tabuleiro.lineTo(750,20);
    tabuleiro.lineTo(750,48);
    tabuleiro.stroke();
}

function desenhaCorpo(){
    tabuleiro.moveTo(750,84);
    tabuleiro.lineTo(750,140);
    tabuleiro.stroke();
}

function desenhaBracoD(){
       tabuleiro.moveTo(750,90);
       tabuleiro.lineTo(720,110);
      tabuleiro.stroke();
}

function desenhaBracoE(){
    tabuleiro.moveTo(750,90);
    tabuleiro.lineTo(780,110);
    tabuleiro.stroke();
}

function desenhaPernaD(){
    tabuleiro.moveTo(750,140);
    tabuleiro.lineTo(720,165);
    tabuleiro.stroke();
}

function desenhaPernaE(){
    tabuleiro.moveTo(750,140);
    tabuleiro.lineTo(780,165);
    tabuleiro.stroke();
}
function desenhaCabeca(){
    tabuleiro.moveTo(767,65);
    tabuleiro.arc(750, 67, 17, 0, 2 * 3.14);
    tabuleiro.stroke();
}

function cabecaEnforcada(){	
    tabuleiro.strokeStyle = "#f3f5fc";
    tabuleiro.beginPath();
    tabuleiro.lineWidth = 8;
    tabuleiro.moveTo(767,65);
    tabuleiro.arc(750, 67, 17, 0, 2 * 3.14);
       tabuleiro.stroke();

    tabuleiro.fillStyle = "#f3f5fc";
    tabuleiro.strokeStyle = "#0a3871";
    tabuleiro.beginPath();
    tabuleiro.lineWidth = 6;


    tabuleiro.moveTo(776,64);
    tabuleiro.arc(760, 70, 17, 0, 2 * 3.14);
    tabuleiro.moveTo(750,47);
    tabuleiro.lineTo(750,53);
    tabuleiro.stroke()

    tabuleiro.font='20px arial';
      tabuleiro.lineWidth=4;
    tabuleiro.fillStyle='red';   
    tabuleiro.fillText('Que pena', 820, 80)	
    tabuleiro.fillText("Você perdeu!!!",820, 110);
    tabuleiro.fillText('..',780,80)
    tabuleiro.fillText('.', 784,85)
        tabuleiro.lineWidth=8;
    tabuleiro.fillStyle='blue'; 
      tabuleiro.fillText('A palavra era:',820, 140);
    tabuleiro.font='30px arial';
    tabuleiro.fillText(palavraSecreta,820, 180); 
    
}