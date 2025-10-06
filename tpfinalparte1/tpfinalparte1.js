let pantalla = []; //arreglo para las pantallas
let imagenes = []; // arreglo de imágenes
let dialogos = [];   // arreglo para los textos
let sonido; //variable para sonido

function preload() {
  // Cargamos las imágenes en un arreglo y un ciclo for
  for (let i = 0; i <18; i++) {
    imagenes[i] =loadImage('data/imagen' + i + '.jpg');
  }
//subida de imagenes sin ciclo for
  //imagenes[0] = loadImage("data/imagen_01.jpeg");   // portada
  //imagenes[1] = loadImage("data/imagen_02.jpg"); // primera imagen - aladin y la princesa
  //imagenes[2] = loadImage("data/imagen_03.jpg"); // segunda imagen - el hechizero
  //imagenes[3] = loadImage("data/imagen_04.jpg"); // tercera imagen - ingresando a la cueva
  //imagenes[4] = loadImage("data/imagen_05.jpeg"); // cuarta imagen - aladin y la lampara

  //dialogos=loadStrings('data/dialogos.txt'); //subida de txt
  soundFormats('mp3', 'ogg');
  setLoop = true;
  sonido = loadSound ('data/sonidoAmbiente.mp3'); // subida de sonido
}

function setup() {
  createCanvas(640, 480);

  //console.log(dialogos);
}

function draw() {
  background(0);

  sonido.play();
  dibujarP();
}

//function mousePressed() {
//  if (pantalla === 0) {
//    // Botón comenzar
//    if (mouseX > 50 && mouseX < 230 && mouseY > height - 100 && mouseY < height - 50) {
//      pantalla = 1;
//    }
    //  // Botón créditos
    //  if (mouseX > width - 230 && mouseX < width - 50 && mouseY > height - 100 && mouseY < height - 50) {
    //    pantalla = 2;
    //  }
    //} else if (pantalla === 1) {
    //  // Botón continuar a pantalla 3
    //  if (mouseX > width/2 - 90 && mouseX < width/2 + 90 && mouseY > height - 50 && mouseY < height - 10) {
    //    pantalla = 3;
    //  }
    //} else if (pantalla === 2) {
    //  // De la pantalla créditos, vuelve a la primer pantalla
    //  pantalla = 0;
    //}
 // }
