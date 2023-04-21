//ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let pontos = 0;


function mostraAtor(){
  image (imagemDoAtor, xAtor, yAtor, 100, 30);
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW))
    {  yAtor -=3 }
    if (keyIsDown(DOWN_ARROW))
      if(podeSeMover()) { 
        yAtor +=3
  }
}


function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i= 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro,alturaCarro,
    xAtor,yAtor, 5.5)
    
    if (colisao){
        voltaAtorParaPosicaoInicial();
      somDaColisao.play();
        if(pontosMaiorQueZero()){
        pontos-=1;
        }
  }
}
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  fill(color(153,50,204))
  textSize(25)
  text(pontos, width / 5, 25);
}
  
function adicionaPontos(){
  if (yAtor < 15){
    pontos+=1;
    somDosPontos.play();
  voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return pontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
  
}
  
