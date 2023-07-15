import { Routes, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:id' element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
