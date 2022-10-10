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