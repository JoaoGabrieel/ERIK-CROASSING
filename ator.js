//ator
let xAtor = 100;
let yAtor = 366;

function mostraAtor(){
  image (imagemDoAtor, xAtor, yAtor, 100, 40);
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW))
    {  yAtor -=3 }
    if (keyIsDown(DOWN_ARROW))
    {  yAtor +=3}
}