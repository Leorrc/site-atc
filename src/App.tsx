import { GlobalStyles } from './styles/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './components/02-Header'
import { Home } from './pages/01-Home'
import { Events } from './pages/04-Events/events'
import { Parceiros } from './pages/03-Parceiros/parceiros'
import { Footer } from './components/03-Footer'
import { Affiliates } from './pages/02-Affiliates/affiliates'

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
