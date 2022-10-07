import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ypsgroup from './yps-group/Ypsgroup';
import './index.css'
import Testimoni from './Testimoni/Testimoni';
import Footer from './Footer/Footer';
import PeoBatak from './PEO-BATAK/PeoBatak';
import WeddingPackage from './WEDDING-PACKAGE/WeddingPackage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Ypsgroup/>}/>
            <Route path='peo-batak' element={<PeoBatak/>}/>
            <Route path='wedding-package' element={<WeddingPackage/>}/>
          </Routes>
          <Testimoni/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
