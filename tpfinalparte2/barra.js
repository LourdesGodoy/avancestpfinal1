//en esta pestaña dibujamos y controlamos la barra inferior que contiene los objetos perdidos
class barra {
  constructor() {
    this.yBarra = height - 70;
    this.altoBarra = 70;
    this.tamIcono = 40; // tamaño fijo para las imágenes de los objetos en la barra
  }

  dibujar(tiempoRestante, objetos) {
    fill(196, 57, 247);
    stroke(247, 229, 57);
    strokeWeight(2);
    rect(0, this.yBarra, width, this.altoBarra);
    let centroY = this.yBarra + this.altoBarra / 2;

    // mostrar los segundos
    fill(255, 255, 0);
    textSize(30);
    textAlign(LEFT, CENTER);
   text(`${tiempoRestante}s`, 20, centroY);

    // muestra las img de los objetos a encontrar
    let xPosIcono = 120; // Posición inicial
    // itera sobre el arreglo de objetosescondidos
    for (let obj of objetos) {
      // tenemos la imagen correcta usando el índice guardado en el objeto
      let img = iconosItem[obj.indiceImagen];
      if (img) {
        // Dibuja la imagen del objeto
        image(img, xPosIcono, centroY - this.tamIcono / 2, this.tamIcono, this.tamIcono);
      }

      // si el objeto fue encontrado se lo tacha de la lista de objetos con una linaea
      if (obj.encontrado) {
        stroke(255, 0, 0); //rojo fuerte
        strokeWeight(3);
        line(xPosIcono, centroY - this.tamIcono / 2, xPosIcono + this.tamIcono, centroY + this.tamIcono / 2);
        noStroke();
      }

      // avanza la posición horizontal para el siguiente ícono
      xPosIcono += this.tamIcono + 15; // el +15 es para que se posiciones mas espaciados
    }
  }
}
