
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Design from './Pages/Design';
import Navbar from './Components/Navbar';
import Pricing from './Pages/Pricing';
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Design' element={<Design/>} />
    <Route path='/Pricing' element={<Pricing/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
