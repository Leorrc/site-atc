import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { Header } from './components/01-Header';
import { Home } from './pages';
import { Events } from './pages/events';
import { Footer } from './components/Footer';



function App() {
  return (
    <Router>
      <GlobalStyles />
        <Header />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          {/* <Route path='/affiliates' element={<Affiliates />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/materials' element={<Materials />} /> */}
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;


