
import './App.css';
import Home from './pages/home';

import About from './pages/About';

import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about' element={ <About />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
      
      
      
    </div>
  );
}

export default App;
