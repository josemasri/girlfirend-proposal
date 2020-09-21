import React from "react";
import Typed from "react-typed";
import './App.css'

function App() {
  return (
    <div className="App">
      <Typed
        strings={[
          "El día de hoy, lunes 21 de septiembre quiero preguntarte algo",
          "Primero quiero decirte que eres la niña más hermosa del mundo",
          "Que estar contigo me hace sonreir",
          "Que desde que llegaste a mi vida todo es mejor",
          "Me encanta todo de tí, tu sonrira, tus ojos, tu pelo, tu piel, tu cuerpo, todo de tí es perfecto",
          "Adoro platicar contigo y pasar mucho tiempo a tú lado. Ver pelis o solo verte, no necesito nada más",
          "No solo físicamente eres grandiosa, tu forma de ser y esa chispa que tienes me encanta",
          "Me gustan mucho tus locuras",
          "Me encanta que no seas predecible",
          "Y me encantaría poder pasar mucho más tiempo contigo",
          "Desde que te ví ese jueves en Hoyo 19 no he podido dejar de pensar en tí",
          "Y por eso este día quiero preguntarte algo",
          "¿Quieres ser mi novia?\n❤❤❤",
        ]}
        typeSpeed={80}
      />
    </div>
  );
}

export default App;
