import React from 'react'
import Tarjetas from '../components/Tarjetas'

function Bienvenida() {
  const [irATarjetas, setIrATarjetas] = React.useState(false)

  if (irATarjetas) {
    return <Tarjetas />
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenido a MenteSana</h1>
      <p>
        Esta plataforma está diseñada para ayudarte a mejorar tu salud mental como estudiante de ingeniería en sistemas.
        Aquí encontrarás recursos, ejercicios y preguntas que te ayudarán a conocerte mejor y gestionar tu bienestar.
      </p>
      <button
        onClick={() => setIrATarjetas(true)}
        style={{ marginTop: '2rem', padding: '0.8rem 1.5rem', fontSize: '1rem' }}
      >
        Empezar autoevaluación
      </button>
    </div>
  )
}

export default Bienvenida
