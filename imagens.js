//Imagens é Sons

let imagemDaEstrada;
let imagemDoAutor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDosPontos;

function preload(){
  imagemDaEstrada= loadImage("imagens/estrada.png");
  imagemDoAtor= loadImage("imagens/ator-2.png");
  imagemCarro= loadImage("imagens/carro-1.png");
  imagemCarro2= loadImage("imagens/carro-2.png");
  imagemCarro3= loadImage("imagens/carro-3.png");
  imagemCarros= [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro, imagemCarro2, imagemCarro3]
  
  
  somDaTrilha= loadSound("sons/trilha.mp3");
  somDaColisao= loadSound("sons/colidiu.mp3");
  somDosPontos= loadSound("sons/pontos.wav");
} 