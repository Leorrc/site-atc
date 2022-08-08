import { GlobalStyles } from './styles/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './components/01-Header'
import { Home } from './pages'
import { Events } from './pages/events'
import { Parceiros } from './pages/parceiros'
import { Footer } from './components/Footer'
import { Affiliates } from './pages/affiliates'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/affiliates" element={<Affiliates />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
