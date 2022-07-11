import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Bollywood from './components/Bollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';
import Hollywood from './components/Hollywood';
import Technology from './components/Technology';
import Home from './components/Home';
import './components/styles.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='home'>
          <div className="logo">
            <div className="the">THE</div>
            <div className="siren">SIREN</div>
          </div>
          <div id='navbar'>
            <div><Link to="/">Home</Link></div>
            <div><Link to={'/bollywood'}>Bollywood</Link></div>
            <div><Link to={'/hollywood'}> Hollywood</Link></div>
            <div><Link to={'/technology'}>Technology</Link></div>
            <div><Link to={'/fitness'}>Fitness</Link></div>
            <div><Link to={'/food'}>Food</Link></div>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/Hollywood' element={<Hollywood />} />
          <Route path='/Fitness' element={<Fitness />} />
          <Route path='/Food' element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
