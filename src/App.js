import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Cat from './pages/cat-api/Cat';
import  Excuse  from './pages/excuser-api/Excuse';
import Chuck from './pages/chuck-norris-api/Chuck';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cat" element={<Cat/>}/>
          <Route path="/excuse" element={<Excuse/>}/>
          <Route path="/chuck" element={<Chuck/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>}/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
