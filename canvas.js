let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'black'
pincel.strokeStyle = 'black'
function desenhaCabeça() {
  pincel.beginPath();
  pincel.arc(250,160, 30, 0, 2 * Math.PI);
  pincel.stroke();
}

function desenhaTronco() {
  pincel.moveTo(250,190);
  pincel.lineTo(250,290);
  pincel.stroke();
}
function desenhaBracoEsquerdo() {
  pincel.moveTo(250,210);
  pincel.lineTo(300,230);
  pincel.stroke();
}

function desenhaBracoDireito() {
  pincel.moveTo(250,210);
  pincel.lineTo(200,230);
  pincel.stroke();
}

function desenhaPernaDireita() {
  pincel.moveTo(250,290);
  pincel.lineTo(300,310);
  pincel.stroke();
}


function desenhaPernaEsquerda() {
  pincel.moveTo(250,290);
  pincel.lineTo(200,310);
  pincel.stroke();
}
function desenhaForca() {

  pincel.fillStyle = 'black'
  pincel.fillRect(100, 50, 10, 400);
  pincel.fillRect(100, 50, 200, 10);
  pincel.moveTo(250,50);
  pincel.lineTo(250,130);
  pincel.stroke();
}

desenhaForca()