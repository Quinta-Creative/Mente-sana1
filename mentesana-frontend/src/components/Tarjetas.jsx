import React, { useState } from 'react'

const preguntas = [
  {
    pregunta: "¿Cómo describes tu nivel de estrés durante la semana?",
    opciones: ["Bajo", "Moderado", "Alto"],
    consejos: {
      "Bajo": "¡Genial! Sigue manteniendo hábitos saludables.",
      "Moderado": "Considera tomar pequeños descansos durante el día.",
      "Alto": "Es importante que identifiques tus detonantes y practiques ejercicios de respiración."
    }
  },
  {
    pregunta: "¿Con qué frecuencia duermes al menos 7 horas por noche?",
    opciones: ["Siempre", "A veces", "Casi nunca"],
    consejos: {
      "Siempre": "El buen descanso mejora tu concentración. ¡Sigue así!",
      "A veces": "Trata de establecer una rutina de sueño.",
      "Casi nunca": "Dormir bien es esencial para la salud mental. Intenta reducir el uso de pantallas antes de dormir."
    }
  },
  {
    pregunta: "¿Con que frecuencia hablas de tus emociones con las demás personas?",
    opciones: ["Siempre", "A veces", "Nunca"],
    consejos: {
      "Simpre": "¡Genial! Sigue manteniendo hábitos saludables.",
      "A veces": "Considera tomar pequeños descansos durante el día.",
      "Nunca": "Es importante que identifiques tus detonantes y practiques ejercicios de respiración."
    }
  }
]

function Tarjetas() {
  const [indice, setIndice] = useState(0)
  const [respuestas, setRespuestas] = useState([])
  const [resultadoFinal, setResultadoFinal] = useState(null)

  const handleRespuesta = (opcion) => {
    const nuevaRespuesta = {
      pregunta: preguntas[indice].pregunta,
      respuesta: opcion,
      consejo: preguntas[indice].consejos[opcion]
    }

    const nuevasRespuestas = [...respuestas, nuevaRespuesta]

    if (indice + 1 < preguntas.length) {
      setRespuestas(nuevasRespuestas)
      setIndice(indice + 1)
    } else {
      // Ya se respondieron todas
      setResultadoFinal(nuevasRespuestas)
    }
  }

  if (resultadoFinal) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Resultados y Consejos</h2>
        {resultadoFinal.map((r, i) => (
          <div key={i} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <strong>{r.pregunta}</strong><br />
            <em>Tu respuesta:</em> {r.respuesta}<br />
            <em>Consejo:</em> {r.consejo}
          </div>
        ))}
      </div>
    )
  }

  const preguntaActual = preguntas[indice]

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{preguntaActual.pregunta}</h2>
      <div style={{ marginTop: '1rem' }}>
        {preguntaActual.opciones.map((opcion, i) => (
          <button
            key={i}
            onClick={() => handleRespuesta(opcion)}
            style={{ margin: '0.5rem', padding: '0.7rem 1.2rem', borderRadius: '8px', cursor: 'pointer' }}
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tarjetas
