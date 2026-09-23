import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoMira from './assets/mira_ericeira.jpg'

export default function Reservation() {
  const [formData, setFormData] = useState({
    name_client: '',
    email: '',
    date: '',
    hour: '',
    number_people: 2,
    observacoes: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('A processar reserva...')

    fetch('http://127.0.0.1:8000/api/reservations/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) setStatus('Reserva confirmada com sucesso!')
        else setStatus('Erro ao reservar. Verifique os dados.')
      })
      .catch(() => setStatus('Erro de conexão com o servidor.'))
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', paddingTop: '60px' }}>
      
      <Link to="/" style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <img 
          src={logoMira} 
          alt="Voltar à Home" 
          style={{ width: '60px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} 
        />
      </Link>

      <div style={{ maxWidth: '400px', margin: '40px auto', width: '100%' }}>
        <h2 style={{ textAlign: 'center' }}>Faça a sua Reserva</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
          <input type="text" placeholder="Nome completo" required onChange={e => setFormData({...formData, name_client: e.target.value})} />
          <input type="email" placeholder="Seu melhor e-mail" required onChange={e => setFormData({...formData, email: e.target.value})} />
          <input type="date" required onChange={e => setFormData({...formData, date: e.target.value})} />
          <input type="time" required onChange={e => setFormData({...formData, hour: e.target.value})} />
          <input type="number" min="1" placeholder="Nº de Pessoas" required onChange={e => setFormData({...formData, number_people: e.target.value})} />
          <textarea placeholder="Observações (opcional. ex: alergias, cadeira de bebé)" rows="3" onChange={e => setFormData({...formData, observacoes: e.target.value})}></textarea>
          
          <button type="submit" className="btn-primary">Confirmar Reserva</button>
        </form>
        
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{status}</p>
        
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/">
            <button className="btn-secondary">Voltar ao Início</button>
          </Link>
        </div>
      </div>
    </div>
  )
}