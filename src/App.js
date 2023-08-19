import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from 'react-bootstrap';
import NAVreact from './Component/Navbar';
import Home from './Component/Home';
import Feature from './Component/Feature';

import { BrowserRouter ,Routes ,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <NAVreact />
    <Routes>
      <Route path="home" element={<Home />}    />
      <Route path="features" element={<Feature />}    />
    </Routes>
    </div>
  );
}

export default App;
