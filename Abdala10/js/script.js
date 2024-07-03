class CJugador {
  constructor() {
    this.jugadores = [];
  }

  agregarJugador(nombre, POS, Edad, Est, Pe, NAC) {
    const IdJugador = Math.floor(Math.random() * 1000) + 1;
    this.jugadores.push({
      IdJugador,
      nombre,
      POS,
      Edad,
      Est,
      Pe,
      NAC,
    });
  }

  generarTablaJugadores() {
    const tablaBody = document.querySelector('#jugadorTable tbody');
    tablaBody.innerHTML = '';

    this.jugadores.forEach(jugador => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${jugador.nombre}</td>
        <td>${jugador.POS}</td>
        <td>${jugador.Edad}</td>
        <td>${jugador.Est}</td>
        <td>${jugador.Pe}</td>
        <td>${jugador.NAC}</td>
      `;
      tablaBody.appendChild(fila);
    });
  }

  listarJugadoresArgentinos() {
    const jugadoresArgentinos = this.jugadores.filter(jugador => jugador.NAC.toLowerCase() === 'argentina');
    const nombresJugadoresArgentinos = jugadoresArgentinos.map(jugador => `${jugador.nombre}`);
    return nombresJugadoresArgentinos;
 }

  listarPeso() {
    const jugadoresPeso = this.jugadores.filter(jugador => jugador.Pe >= 75 && jugador.Pe <= 80);
    const nombresJugadoresPeso = jugadoresPeso.map(jugador => `${jugador.nombre}`);
    return nombresJugadoresPeso;
  }

  jugadorMasAlto() {

    let estaturaMaxima = -Infinity;
    let jugadorMasAlto = null;

    this.jugadores.forEach(jugador => {
      const estatura = parseFloat(jugador.Est); 
      if (estatura > estaturaMaxima) {
        estaturaMaxima = estatura;
        jugadorMasAlto = jugador;
      }
    });

    return jugadorMasAlto ? jugadorMasAlto.nombre : 'Ningún jugador registrado';
  }


}



const bibliotecaJugador = new CJugador();


bibliotecaJugador.agregarJugador("Fábio1", "G", 43, "1.88", "86", "Brasil");
bibliotecaJugador.agregarJugador("Marlon4", "D", 28, "1.83", "78", "Brasil");
bibliotecaJugador.agregarJugador("Marcelo12", "D", 35, "1.73", "72", "Brasil");
bibliotecaJugador.agregarJugador("Nino33", "D", 26, "1.88", "82", "Brasil");
bibliotecaJugador.agregarJugador("John Kennedy9", "A", 21, "1.73", "71", "Brasil");
bibliotecaJugador.agregarJugador("Keno11", "A", 34, "1.78", "72", "Brasil");
bibliotecaJugador.agregarJugador("Germán Cano14", "A", 35, "1.78", "81", "Argentina");


bibliotecaJugador.generarTablaJugadores();


document.getElementById("resultado1").textContent = "Jugadores Argentinos: " + bibliotecaJugador.listarJugadoresArgentinos();


document.getElementById("resultado2").textContent = "Jugadores que pesan entre 75kg y 80kg: " + bibliotecaJugador.listarPeso();


document.getElementById("resultado3").textContent = "El jugador mas alto es: " + bibliotecaJugador.jugadorMasAlto();
