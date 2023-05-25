import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
const calendario = require('./img/calendario.png')
const reloj = require('./img/reloj.png')
const reloj2 = require('./img/reloj2.png')
const traje = require('./img/traje.png')
const trompeta = require('./img/trompeta.png')
const ubicacion = require('./img/ubicacion.png')
const vestido = require('./img/vestido.png')
const whatsapp = require('./img/whatsapp.png')

function App() {
  // const [date, setDate] = useState(new Date());
  // const map = '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3283.7334772850254!2d-58.63265452343022!3d-34.61090045787908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDM2JzM5LjMiUyA1OMKwMzcnNDguMyJX!5e0!3m2!1ses!2sar!4v1685039166357!5m2!1ses!2sar" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  
  // useEffect(() => {
  //   setDate(new Date());
  // }, [])

  return (
    <main class="p-2">
      <div class="tarjeta">
        Mis 50 Andrea
      </div>
      <div class="clock d-flex flex-column justify-content-center align-items-center">
        <img class="mx-3 logo-l" src={reloj} alt="reloj"/>
        <h2>3 Dias 4 Horas 25 Minutos</h2>
        {/* <h2>{console.log(date)}</h2> */}
      </div>
      <div class="tarjeta d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex align-items-center justify-content-center">
          <img class="mx-3 logo-l" src={traje} alt="traje"/>
          <img class="mx-3 logo-l" src={vestido} alt="vestido"/>
        </div>
        <h2 class="mt-2">Traer algo blanco</h2>
      </div>
      <div class="tarjeta d-flex justify-content-center align-items-center">
        <img class="mx-2 logo-s" src={trompeta} alt="trompeta"/>
        Es una fiesta sorpresa, por lo que procuren llegar a horario o antes
      </div>
      <div class="tarjeta d-flex justify-content-between align-items-center">
        <ul class="d-flex flex-column justify-content-center m-0 p-0">
          <li class="my-1">
            <img class="logo-s mx-2" src={ubicacion} alt="ubicacion"/>
            <p class="d-inline">jufre 452</p>
          </li>
          <li class="my-1">
            <img class="logo-s mx-2" src={calendario} alt="calendario"/>
            <p class="d-inline">10/6/23 10hs</p>
          </li>
          <li class="my-1">
            <img class="logo-s mx-2" src={reloj2} alt="calendario"/>
            <p class="d-inline">10:00 PM</p>
          </li>
        </ul>
        {/* <div class="mapa" dangerouslySetInnerHTML={{__html: map}}></div> */}
        <img class="mapa" src="https://picsum.photos/100/100" alt="mapa"/>
      </div>
      <div class="tarjeta d-flex justify-content-center align-items-center">
        <img class="mx-2 logo-s" src={whatsapp} alt="whatsapp"/>
        <h2>Confirmar asistencia</h2>
      </div>
    </main>
  );
}

export default App;
