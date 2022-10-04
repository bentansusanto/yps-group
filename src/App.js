import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ypsgroup from './yps-group/Ypsgroup';
import './index.css'
import Testimoni from './Testimoni/Testimoni';
import Footer from './Footer/Footer';
import PeoBatak from './PEO-BATAK/PeoBatak';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Ypsgroup/>}/>
            <Route path='peo-batak' element={<PeoBatak/>}/>
          </Routes>
          <Testimoni/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
