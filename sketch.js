function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentaCarro();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


