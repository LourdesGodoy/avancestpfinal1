//en esta pestaña dibujamos y controlamos los objetos perdidos a buscar en el juego
//esta clase define el area de clic de cada ítem/obejeto escondido y su estado, si fue encontrado o no encontrado
class ObjetoEscondido {
  constructor(x, y, ancho, alto, nombre, indiceImagen) { //empezamos a poner los atributos a las clases
    this.x = x;  // pos X de donde el objeto esta escondido
    this.y = y;  // pos Y de donde el objeto esta escondido
    this.ancho = ancho;
    this.alto = alto;
    this.nombre = nombre;
    this.indiceImagen = indiceImagen;
    this.encontrado = false;
  }
  // usamos este metodo para verificar si el clic ocurrio dentro del area donde esta posicionado el obejeto
  fueClickeado(px, py) {
  //solo puede ser clicado si todavia no fue encontrado
    if (!this.encontrado) {
      return (
        px > this.x &&
        px < this.x + this.ancho &&
        py > this.y &&
        py < this.y + this.alto
        );
    }
    return false;
  }
}
