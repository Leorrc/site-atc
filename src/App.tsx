import { GlobalStyles } from './styles/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './components/02-Header'
import { Home } from './pages/01-Home'
import { Events } from './pages/02-Events/events'
import { Parceiros } from './pages/04-Parceiros/parceiros'
import { Footer } from './components/03-Footer'
import { Affiliates } from './pages/03-Affiliates/affiliates'
import { Leitura } from './pages/05-Leitura/leitura'
import ScrollToTop from './components/01-Utils/ScrollTop'
import ScrollToTopButton from './components/01-Utils/ScrollTopButton'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyles />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/leitura" element={<Leitura />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  )
}

export default App
