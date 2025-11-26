 //en esta pestaña controlamos y dibujamos todas las pantallas del juego, tipo game manager
class Pantallas{
  constructor() {}
  dibujarPantallas() {
    // Usamos la estructura else if para controlar el flujo de los dibujos de la pantalla
    if (this.estado === "PORTADA") {
      this.dibujarPortada();
    } else if (this.estado === "INTRODUCCION") {
      this.dibujarIntroduccion();
    } else if (this.estado === "INSTRUCCIONES") {
      this.dibujarInstrucciones();
    } else if (this.estado === "JUGANDO") {
      this.dibujarJuego();
    }

    // pantallas de ganar, perder y creditos
    else if (this.estado === "GANAR" || this.estado === "PERDER") {
      this.dibujarFinal(this.estado);
    } else if (this.estado === "CREDITOS") {
      this.dibujarCreditos();
    }
  }

  dibujarPortada() {
    image(fondos.portada, 0, 0, width, height);
    image(fondos.sonido, 15, 15, 40, 40); //icono de sonido
    fill(255);
    stroke(237, 192, 26);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("y los objetos perdidos", width / 2, height / 2 + 25);
    btnComenzar.dibujar();
  }

  dibujarIntroduccion() {
    image(fondos.introduccion, 0, 0, width, height);
    image(fondos.sonido, 15, 15, 40, 40); //icono de sonido
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(15);
    text("Estás atrapado! Antes de que el tiempo \n termine (30 segundos) debes encontrar \n todos los objetos perdidos para que Aladin \n pueda ser liberado de la cueva.", 220, 116, 350, 150);
    btnSiguiente.dibujar();
  }

  dibujarInstrucciones() {
    image(fondos.instrucciones, 0, 0, width, height);
    image(fondos.sonido, 15, 15, 40, 40); //icono de sonido
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(15);
    text("Como Jugar:", 190, 35, 420, 150);
    text("Encuentra los 8 objetos que \n se muestran en el listados en \n la barra inferior", 250, 90, 300, 150);
    text("Si los encontras todos a tiempo ¡GANAS! \n Si se acaba el tiempo y no \n encontraste ninguno, ¡PERDES!", 250, 160, 300, 150);
    btnComenzarJuego.dibujar();
  }

  dibujarJuego() {
    image(fondos.juego, 0, 0, width, height);

    for (let obj of this.objetosEscondidos) {
      // tenemos la imagen correcta del arreglo iconosItem
      let img = iconosItem[obj.indiceImagen];  //el indiceImagen del objeto nos dice que imagen usar
      // verificamos que la imagen exista (para evitar errores si algo falla en la carga)
      if (img) {
        push(); //guarda la configuración de dibujo actual
        if (obj.encontrado) {
          tint(255, 0, 0, 200); //esto pinta las imagenes cuando son encontradas
        }
        image(img, obj.x, obj.y, obj.ancho, obj.alto);
        pop(); //restaura la configuración de los dibujo original, deshace el tint para otros dibujos
      }
    }

    // dibuja la Barra
    // le pasamos el tiempo restante y el arreglo de objetos para que sepa qué mostrar
    juego.barra.dibujar(juego.tiempoRestante, juego.objetosEscondidos);
  }

  dibujarFinal(resultado) {
    let imagenFinal = (resultado === "GANAR") ? fondos.ganar : fondos.perder;
    image(imagenFinal, 0, 0, width, height);
    image(fondos.sonido, 15, 15, 40, 40); //icono de sonido
    btnReiniciar.dibujar();
    btnCreditos.dibujar();
  }

  dibujarCreditos() {
    image(fondos.creditos, 0, 0, width, height);
    image(fondos.sonido, 15, 15, 40, 40); //icono de sonido
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(36);
    text("Creditos", width / 2, 80);

    textSize(20);
    text("Creadoras: Gramajo Sofía \n y Godoy Lourdes \n PMIW ©2025", 250, 150, 350, 150);
    btnVolver.dibujar();
  }
}
