
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/'  element={<Home></Home>}>Home</Route>
        <Route path='/about' element={<About></About>}>About</Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
