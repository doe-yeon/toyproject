import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Company from './pages/Company';
import Service from './pages/Service';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Company' element={<Company />}></Route>
        <Route path='/Service' element={<Service />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;