import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Reservation from './Reservation'
import Events from './Events'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservar" element={<Reservation />} />
        <Route path="/eventos" element={<Events />} />
        {/* Futuramente: <Route path="/menu" element={<Menu />} /> */}
      </Routes>
    </BrowserRouter>
  )
}