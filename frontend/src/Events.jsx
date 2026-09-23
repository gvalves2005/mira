import { Link } from 'react-router-dom'
import logoMira from './assets/mira_ericeira.jpg'

export default function Events() {
  // Mais tarde, estes dados virão do seu Django!
  const eventosProximos = [
    { id: 1, nome: "Sunset Party c/ DJ Vibe", data: "15 Setembro 2026", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ]
  
  const eventosPassados = [
    { id: 2, nome: "Abertura de Verão", data: "1 Junho 2026", img: "https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ]

  const EventCard = ({ evento, passado }) => (
    <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', marginBottom: '20px', opacity: passado ? 0.6 : 1 }}>
      <img src={evento.img} alt={evento.nome} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <p style={{ color: 'var(--mira-red)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '5px' }}>{evento.data}</p>
        <h3 style={{ margin: 0, color: 'var(--text-main)' }}>{evento.nome}</h3>
      </div>
    </div>
  )

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-color)', paddingTop: '80px', paddingBottom: '40px' }}>
      
      <Link to="/" style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <img src={logoMira} alt="Voltar" style={{ width: '60px', borderRadius: '8px' }} />
      </Link>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Eventos</h2>
        
        <h3 style={{ borderBottom: '2px solid var(--mira-red)', paddingBottom: '10px', marginBottom: '20px' }}>Próximos</h3>
        {eventosProximos.map(ev => <EventCard key={ev.id} evento={ev} passado={false} />)}

        <h3 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px', marginTop: '40px', marginBottom: '20px', color: '#888' }}>Passados</h3>
        {eventosPassados.map(ev => <EventCard key={ev.id} evento={ev} passado={true} />)}
      </div>
    </div>
  )
}