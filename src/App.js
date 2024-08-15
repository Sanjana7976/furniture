import './App.css';
import Design from './components/Design';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import Service from './components/Service';
import User from './components/User';
import Cart from './components/Cart';
import Blog from './components/Blog';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App  bg-light">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/User' element={<User/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      
      {/* <Design/>
      <Product/>*/}
      <Footer/> 
    </div>
  );
}

export default App;
