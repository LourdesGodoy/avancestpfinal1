function dibujarP(numP) { //funcion con parametros
  if (numP === 0) {
    // -------- PORTADA --------
    image(imagenes[0], 0, 0, width, height);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("La lámpara de Aladino", width/2, height/5);
  } else if (numP === 1) {
    // -------- PANTALLA DE AVENTURA GRAFICA 1 --------
    image(imagenes[1], 0, 0, width, height); //1ra imagen - aladin y la princesa
  } else if (numP === 3) {
    // -------- PANTALLA DE AVENTURA GRAFICA 2 --------
    image(imagenes[2], 0, 0, width, height); //2da imagen - el hechizero
  } else if (numP === 4) {
    // -------- PANTALLA DE AVENTURA GRAFICA 3 --------
    image(imagenes[3], 0, 0, width, height); //3ra imagen - ingresando a la cueva
  } else if (numP === 5) {
    // -------- PANTALLA DE AVENTURA GRAFICA 4 --------
    image(imagenes[4], 0, 0, width, height); //4ta imagen - aladin y la lampara
  } else if (numP === 6) {
    // -------- PANTALLA DE AVENTURA GRAFICA 5 --------
    //PRIMER CONFLICTO-DECISION//
    image(imagenes[5], 0, 0, width, height); //5ta imagen - aladin y el anillo magico
  } else if (numP === 7) {
    // -------- PANTALLA DE AVENTURA GRAFICA 6 --------
    image(imagenes[6], 0, 0, width, height); //6ta imagen - aladin y la alfombra magica
  } else if (numP === 8) {
    // -------- PANTALLA DE AVENTURA GRAFICA 7 --------
    image(imagenes[7], 0, 0, width, height); //7ma imagen - aladin conoce al el genio
  } else if (numP === 9) {
    // -------- PANTALLA DE AVENTURA GRAFICA 8 --------
    image(imagenes[8], 0, 0, width, height); //8va imagen - aladin hablando con el genio
  } else if (numP === 10) {
    // -------- PANTALLA DE AVENTURA GRAFICA 9 --------
    //SEGUNDO CONFLICTO-DECISION//
    image(imagenes[9], 0, 0, width, height); //9na imagen - aladin vuelve a la cuidad
  } else if (numP === 11) {
    // -------- PANTALLA DE AVENTURA GRAFICA 10 --------
    //PRIMER POSIBLE FINAL//
    image(imagenes[10], 0, 0, width, height); //10ma imagen - aladin encerrado para siempre
  } else if (numP === 12) {
    // -------- PANTALLA DE AVENTURA GRAFICA 11 --------
    //TERCER CONFLICTO-DECISION//
    image(imagenes[11], 0, 0, width, height); //11 imagen - propuesta del genio
  } else if (numP === 13) {
    // -------- PANTALLA DE AVENTURA GRAFICA 12 --------
    //SEGUNDO POSIBLE FINAL//
    image(imagenes[12], 0, 0, width, height); //12 imagen - aladin pierde todo por egocentrico
  } else if (numP === 14) {
    // -------- PANTALLA DE AVENTURA GRAFICA 13 --------
    image(imagenes[13], 0, 0, width, height); //13 imagen - aladin conoce a la princesa
  } else if (numP === 15) {
    // -------- PANTALLA DE AVENTURA GRAFICA 14 --------
    image(imagenes[14], 0, 0, width, height); // 14 imagen - el hechicero secuestra la princesa
  } else if (numP === 16) {
    // -------- PANTALLA DE AVENTURA GRAFICA 15 --------
    //CUARTO CONFLICTO-DECISION//
    image(imagenes[15], 0, 0, width, height); //15 imagen - aladin se encuentra con el hechicero
  } else if (numP === 17) {
    // -------- PANTALLA DE AVENTURA GRAFICA 16 --------
    image(imagenes[16], 0, 0, width, height); // 16 imagen - el hechicero usa al genio a su favor
  } else if (numP === 18) {
    // -------- PANTALLA DE AVENTURA GRAFICA 17 --------
    image(imagenes[2], 0, 0, width, height); // reciclo la foto 2 - aladin recupera la lampara
    } else if (numP === 19) {
    // -------- PANTALLA DE AVENTURA GRAFICA 17 --------
    //TERCER POSIBLE FINAL//
    image(imagenes[17], 0, 0, width, height); // 17 imagen - aladin feliz con la princesa
    } else if (numP === 20) {
    // -------- PANTALLA DE AVENTURA GRAFICA 17 --------
    //CUARTO POSIBLE FINAL//
    image(imagenes[18], 0, 0, width, height); // 17 imagen - aladin pierde la batalla
    }
}









    // if (numP === 0) {
    // -------- PORTADA --------
    //    image(imagenes[0], 0, 0, width, height);

    //    // Título centrado
    //    fill(255);
    //    textSize(32);
    //    textAlign(CENTER, CENTER);
    //    text("La lámpara de Aladino", width/2, height/5);

    //    // Botón Comenzar (izquierda)
    //    fill(50, 100, 200);
    //    rect(50, height - 100, 180, 50, 10);
    //    fill(255);
    //    textSize(20);
    //    textAlign(CENTER, CENTER);
    //    text("Comenzar", 50 + 90, height - 100 + 25);

    //    // Botón Créditos (derecha)
    //    fill(200, 80, 80);
    //    rect(width - 230, height - 100, 180, 50, 10);
    //    fill(255);
    //    text("Créditos", width - 230 + 90, height - 100 + 25);

    //  } else if (pantalla === 1) {
    //    // -------- PANTALLA DE AVENTURA GRAFICA 1 --------
    //    image(imagenes[1], 0, 0, width, height);

    //    // Texto narrativo en medio
    //    fill(255);
    //    textAlign(CENTER, CENTER);
    //    textSize(22);
    //    text(textos[0], width/2, height/2 -90,300,200);


    //    // Botón continuar
    //    fill(50, 200, 100);
    //    rect(width/2 - 90, height - 50, 180, 40, 10);
    //    fill(255);
    //    textSize(18);
    //    text("Siguiente", width/2, height - 30);
    //  } else if (pantalla === 3) {
    //     // -------- PANTALLA DE AVENTURA GRAFICA 2 --------
    //    image(imagenes[2], 0, 0, width, height);
    //    fill(255);
    //    textAlign(CENTER, CENTER);
    //    textSize(22);
    //    text(textos[1], width/2, height/2 -90,300,200);


    //    // Botón continuar
    //    fill(50, 200, 100);
    //    rect(width/2 - 90, height - 50, 180, 40, 10);
    //    fill(255);
    //    textSize(18);
    //    text("Siguiente", width/2, height - 30);
    //  }
    //  else if (pantalla === 3) {
    //     // -------- PANTALLA DE AVENTURA GRAFICA 3 --------
    //    image(imagenes[3], 0, 0, width, height);
    //    fill(255);
    //    textAlign(CENTER, CENTER);
    //    textSize(22);
    //    text(textos[1], width/2, height/2 -90,300,200);


    //    // Botón continuar
    //    fill(50, 200, 100);
    //    rect(width/2 - 90, height - 50, 180, 40, 10);
    //    fill(255);
    //    textSize(18);
    //    text("Siguiente", width/2, height - 30);

    //  }
    //}
