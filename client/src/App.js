import React from 'react';
import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import BarNav from './components/navBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
     <BarNav />
     <Routes>
     <Route path='/'element={ <Home/> }/>
     <Route path='/contact'element={<Contact />}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
