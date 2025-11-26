//en esta pestaña controlamos lo que sucede en el juego 
class Juego {
  constructor(totalObjetos) {
    //atributos de la clase juego
    this.estado = "PORTADA";
    this.tiempoLimite = 30;
    this.tiempoRestante = 30;
    this.objetosEncontrados = 0;
    this.totalObjetos = totalObjetos;
    this.objetosEscondidos = []; // Arreglo de instancias de ObjetoEscondido
    this.barra = new barra(); // Instancia de la clase barra
  }

  iniciar() {
    this.estado = "JUGANDO";
    this.tiempoRestante = this.tiempoLimite;
    this.objetosEncontrados = 0;
    this.configurarObjetos(); // Prepara el arreglo de 8 objetos
  }

  configurarObjetos() {
    this.objetosEscondidos = [];

    this.objetosEscondidos.push(new ObjetoEscondido( 460, 315, 70, 70, "Lámpara real", 0));
    this.objetosEscondidos.push(new ObjetoEscondido( 130, 190, 80, 40, "lampara oro", 1));
    this.objetosEscondidos.push(new ObjetoEscondido( 140, 350, 60, 60, "alfomra", 2));
    this.objetosEscondidos.push(new ObjetoEscondido( 450, 200, 60, 60, "alfombra2", 3));
    this.objetosEscondidos.push(new ObjetoEscondido( 90, 260, 90, 50, "espada", 4));
    this.objetosEscondidos.push(new ObjetoEscondido( 375, 170, 60, 60, "gema", 5));
    this.objetosEscondidos.push(new ObjetoEscondido( 580, 55, 70, 70, "corona", 6));
    this.objetosEscondidos.push(new ObjetoEscondido( 330, 250, 30, 30, "anillo", 7));

    this.totalObjetos = this.objetosEscondidos.length;
  }

  revisarClick(px, py) {
    if (this.estado !== "JUGANDO") return;

    for (let obj of this.objetosEscondidos) {
      if (obj.fueClickeado(px, py)) {
        obj.encontrado = true;
        this.objetosEncontrados++;

        //aca se revisa si ganó
        if (this.objetosEncontrados >= this.totalObjetos) {
          this.estado = "GANAR";
        }
        break;
      }
    }
  }

  actualizarTiempo() {
    //solo cuenta los 30 segundos del tiempo si estamos jugando
    if (this.estado === "JUGANDO") {
      if (frameCount % 60 === 0 && this.tiempoRestante > 0) {
        this.tiempoRestante--;
      }
    }
  }

  revisarCondiciones() {
    if (this.estado === "JUGANDO" && this.tiempoRestante <= 0) {
      this.estado = "PERDER";
      }
    }
  }

 
