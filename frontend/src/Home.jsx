import { Link } from 'react-router-dom'
import sulBeachImg from './assets/sul_beach.jpg'
import logoMira from './assets/mira_ericeira.jpg'
// Importação das novas fotos
import mira1 from './assets/mira1.jpeg'
import mira2 from './assets/mira2.jpeg'
import mira3 from './assets/mira3.jpeg'
import mira4 from './assets/mira4.jpeg'

export default function Home() {
  return (
    <div style={{ width: '100%' }}>
      <section className="hero-bg" style={{ backgroundImage: `url(${sulBeachImg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img src={logoMira} alt="MIRA Logo" style={{ width: '140px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
          <h1>MIRA Beach Ericeira</h1>
          <p style={{ marginBottom: '40px', fontSize: '1.2rem', fontWeight: '300' }}>A melhor vista da vila, agora à distância de um clique.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
            <Link to="/reservar" style={{ width: '100%', maxWidth: '250px' }}>
              <button className="btn-primary" style={{ width: '100%', padding: '14px' }}>Fazer Reserva</button>
            </Link>
            <Link to="/menu" style={{ width: '100%', maxWidth: '250px' }}>
              <button className="btn-secondary" style={{ width: '100%', backgroundColor: '#ffffff', color: '#2c2c2c', border: 'none', padding: '14px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>Ver Menu</button>
            </Link>
            <Link to="/eventos" style={{ width: '100%', maxWidth: '250px' }}>
              <button className="btn-secondary" style={{ width: '100%', backgroundColor: '#ffffff', color: '#2c2c2c', border: 'none', padding: '14px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>Próximos Eventos</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-container">
        <h2 className="section-title">O nosso espaço</h2>
        <p style={{ lineHeight: '1.8' }}>
          Um espaço desenhado para celebrar o mar, a comida e os bons momentos.
        </p>
        
        <div className="gallery-grid">
          <img src={mira1} alt="Interior MIRA" />
          <img src={mira2} alt="Esplanada MIRA" />
          <img src={mira3} alt="Pratos MIRA" />
          <img src={mira4} alt="Vista MIRA" />
        </div>
      </section>

      {/* --- 2. LOCALIZAÇÃO E HORÁRIOS --- */}
      <section style={{ backgroundColor: 'white' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', textAlign: 'left' }}>
          
          {/* Bloco Mapa */}
          <div style={{ flex: '1 1 300px' }}>
            <h2 className="section-title">Localização</h2>
            <p style={{ marginBottom: '15px' }}><strong>Largo dos Navegantes 1, 2655-320 Ericeira</strong></p>
            <iframe 
              title="Mapa MIRA Ericeira"
              src="https://maps.google.com/maps?q=Mira+Beach+Club,+Ericeira&t=&z=18&ie=UTF8&iwloc=&output=embed" 
              width="100%" height="250" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h2 className="section-title">Horários</h2>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', fontSize: '1.1rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee' }}>
                <span>Segunda - Quinta</span> <strong>12:00 - 23:00</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee' }}>
                <span>Sexta - Sábado</span> <strong>12:00 - 01:00</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee' }}>
                <span>Domingo</span> <strong>12:00 - 23:00</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-container">
        <h2 className="section-title">Contactos</h2>
        <p style={{ marginBottom: '10px' }}><strong>Email:</strong> reservas@miraericeira.pt</p>
        <p><strong>Telefone:</strong> +351 912 345 678</p>
        <div className="social-links">
          <a href="https://www.instagram.com/mira_ericeira/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/people/Mira-Ericeira/61590804206596/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
        </div>
      </section>
      
    </div>
  )
}