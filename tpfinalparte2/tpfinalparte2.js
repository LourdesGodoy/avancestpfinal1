//Sofia Gramajo 119051/4
//Lourdes Godoy 119044/5

let juego; // Objeto de la clase Juego
let pantallas; // Objeto de la clase Pantallas

let fondos = {}; // Objeto para los fondos del juego, portada, introduccion, etc.
let iconosItem = []; // Arreglo para los 8 objetos que hay que encontrar en el juego
let fuente; //Variable para la fuente
let sonido; //Variable para sonido
let btnComenzar, btnSiguiente, btnComenzarJuego, btnReiniciar, btnCreditos, btnVolver; //Variables para los botones

function preload() {
  //carga de imagenes
  fondos.portada = loadImage('data/portada.jpg');
  fondos.introduccion = loadImage('data/introduccion.png');
  fondos.instrucciones = loadImage('data/instrucciones.png');
  fondos.ganar = loadImage('data/imagenganar.png');
  fondos.perder = loadImage('data/imagenperder.png');
  fondos.creditos = loadImage('data/creditos.png');
  fondos.juego = loadImage('data/fondo_juego.png');
  fondos.sonido = loadImage('data/botonsonido.png');

  //carga de los 8 objetos que hay que encontrar
  for (let i = 0; i < 8; i++) {
    iconosItem[i] = loadImage(`data/objeto${i}.png`);
  }
  soundFormats('mp3', 'wav'); // formatos de sonido admitidos
  sonido = loadSound ('data/sonidoAmbiente.wav'); //subida de sonido
  fuente = loadFont ('data/Schoolbell-Regular.ttf'); //subida de la fuente
}
//intentamos que el setup contenga con la menor cantidad de informacion posible, pero el tema botones no me funciona si lo muevo a las demas pestañas, me tira error con width y heigh
function setup() {
  createCanvas(640, 480);
  textFont(fuente);

  juego = new Juego(8); // indica que debe buscar los 8 objetos
  pantallas = new Pantallas();

  btnComenzar = new Boton("Comenzar", width/2 - 50, height/2 + 100, 100, 30); //indica las coordenadas de los botones principales
  btnSiguiente = new Boton("Siguiente", width - 150, height - 80, 120, 40);
  btnComenzarJuego = new Boton("Jugar", width/2 - 50, height/2 + 100, 100, 30);

  btnReiniciar = new Boton("Reiniciar", width/2 - 150, height/2 + 50, 100, 40);
  btnCreditos = new Boton("Creditos", width/2 + 50, height/2 + 50, 100, 40);
  btnVolver = new Boton("Volver", width/2 - 100, height - 100, 200, 50);

  imageMode(CORNER); //NO ME ACUERDO SI ESTO ES IMPORTANTE Y PARA Q SIRVE
  
}

//intentamos que el draw contenga con la menor cantidad de informacion posible
function draw() {
  pantallas.dibujarPantallas(); //llamamos nuestra funcion dibujarPantallas que se encuentra dentro de la pestaña pantallas
  
  juego.actualizarTiempo();
  juego.revisarCondiciones();
}


function mouseClicked() { //manejo de los estados del juego, donde cambiamos de pantalla de la portada a instrucciones y etc.
 if (!juego) return; // evita errores si juego no existe aún
  //usamos la estructura if para manejar el estado del juego
  if (juego.estado === "PORTADA") {
    if (btnComenzar.fuePresionado(mouseX, mouseY)) {
      juego.estado = "INTRODUCCION"; //breve introduccion de que trata el juego
    }
  } else if (juego.estado === "INTRODUCCION") {
    if (btnSiguiente.fuePresionado(mouseX, mouseY)) {
      juego.estado = "INSTRUCCIONES"; //breve introduccion de como se gana y se pierde en el juego
    }
  } else if (juego.estado === "INSTRUCCIONES") {
    if (btnComenzarJuego.fuePresionado(mouseX, mouseY)) {
      juego.iniciar(); // aca inicia el juego, cambia al estado JUGANDO
    }
  } else if (juego.estado === "JUGANDO") {
    //delega la verificación de clic al arreglo de objetos
    juego.revisarClick(mouseX, mouseY);
  } else if (juego.estado === "GANAR" || juego.estado === "PERDER") {
    //manejo de los dos botones en la pantalla final 
    if (btnReiniciar.fuePresionado(mouseX, mouseY)) {
      juego.estado = "PORTADA"; // reinicia el juego
    }
    if (btnCreditos.fuePresionado(mouseX, mouseY)) {
      juego.estado = "CREDITOS"; //muestra la pantalla creditos
    }
  } else if (juego.estado === "CREDITOS") {
    if (btnVolver.fuePresionado(mouseX, mouseY)) {
      juego.estado = "PORTADA"; // reinicia el juego desde la pantalla creditos
    }
  }
}

function mousePressed() { //manejo del sonido
if (!pantallas) return; // evita errores si pantallas no existe aún
//antes como manejabamos las pantallas con la pestaña juego, la linea de codigo era juego.estado, en cambio ahora que tenemos la pestaña pantallas cambia a pantallas.estado
  if (pantallas.estado === "PORTADA" || pantallas.estado === "INTRODUCCION" || pantallas.estado === "INSTRUCCIONES" || pantallas.estado === "CREDITOS" || pantallas.estado === "GANAR" || pantallas.estado === "PERDER") {
    if (mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 55) { //coordenadas de donde esta el icono de sonido
     sonido.loop();
     userStartAudio(); //sin esta linea de codigo el navegador no me deja ejecutar el sonido
      // en este if si el sonido NO está sonando, que empiece
      if (!sonido.isPlaying()) {
        sonido.loop();
        // si el sonido ya está sonando, que se pause
      } else {
        sonido.stop();
      }
    }
  }
}
