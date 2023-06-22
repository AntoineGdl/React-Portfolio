import './App.css';
import { Home } from './pages/Home';
import { Projets } from './pages/Projets';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projets' element={<Projets/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
