//código do ator

let xAtor = 100;
let yAtor = 368;
let comprimentoAtor = 30
let alturaAtor = 27
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor() {
  if (keyIsDown (UP_ARROW) && yAtor > 0) {
    yAtor -= 3 + meusPontos; //aumenta velocidadeYAtor conforme a pontuação
  }
if (keyIsDown (DOWN_ARROW)) {
  if (podeSeMover() && yAtor > 0){
    yAtor += 3 + meusPontos; //aumenta velocidadeYAtor conforme a pontuação
    }
  }
if (keyIsDown(LEFT_ARROW)) {
    if (podeSeMoverEsquerda() && xAtor > 1) {
      xAtor -= 3 + meusPontos; //aumenta velocidadeXAtor conforme a pontuação
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (podeSeMoverDireita() && xAtor > 0) {
      xAtor += 3 + meusPontos; //aumenta velocidadeXAtor conforme a pontuação
    }
  }  
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i ++ ) {
    colisao = collideRectRect(xCarros[i], yCarros[i],  comprimentoCarros, alturaCarros, xAtor, yAtor, comprimentoAtor, alturaAtor)
    if (colisao)  {
      voltaPosicaoInicial (); 
      somColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaPosicaoInicial() {
  yAtor = 368;
  xAtor = 100;
}

function incluiPontos () {
  stroke(0);
  textAlign(CENTER);
  textSize(24);
  fill('#fc7b03')
  text(meusPontos, 250, 27);
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    somPontuacao.play();
    voltaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

//verificando colisão do Ator com as bordas do cenário
function podeSeMover() {
  return yAtor < 368;     
}

function podeSeMoverEsquerda() {
  return xAtor > 7;
}

function podeSeMoverDireita() {
  return xAtor < 465;
}
