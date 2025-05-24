import React, { useState } from 'react'

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar validaciones o conexión futura al backend
    if (usuario && contrasena) {
      onLogin()
    } else {
      alert('Por favor, completa todos los campos')
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Inicia Secion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <br /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login
