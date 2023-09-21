//código dos carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 100, 155, 215, 268, 323];
let velocidadeCarros = [3, 3.5, 4.2, 6, 4.3, 3.3];
let comprimentoCarros = 50;
let alturaCarros = 30;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i ++) {
     image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i ++) {
     xCarros[i] -= velocidadeCarros[i] + (meusPontos + 1); //aumenta velocidadeCarros conforme pontuação
  }  
}

function voltaPosicaoInicialCarro() {
  for (let i = 0; i < imagemCarros.length; i ++) {
    if (passouTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTela(xCarro){
  return xCarro < - 45;
}




