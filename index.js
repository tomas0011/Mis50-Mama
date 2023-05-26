let temporizador = document.querySelector("#temporizador");

const fechaDeCumple = new Date('2023-06-11T01:00:00.000Z')

setInterval(() => {
  const fechaActual = new Date();
  const diferencia = fechaDeCumple - fechaActual;
  var minutos = Math.floor(diferencia / (1000 * 60)) % 60;
  var horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  temporizador.innerText = `${dias} Dias ${horas} Horas ${minutos} Minutos`
}, 1000)